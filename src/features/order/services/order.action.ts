'use server';

import { format } from 'date-fns';
import { google } from 'googleapis';

import { orderEmailBody } from '@/features/email-letters/components';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REFRESH_TOKEN,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody, removeKeyFromString } from '@/shared/lib/utils';

import type { OrderSchema } from '../lib';

export async function order({
  budget,
  email,
  firstName,
  lastName,
  companyName,
  companyWebsite,
  phone,
  message,
  productName,
  productPrice,
}: OrderSchema & { productName: string; productPrice?: string }) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const userBody = makeEmailBody({
      to: email,
      from: EMAIL_USER,
      subject: 'Thank You for Ordering from Optisence!',
      message: orderEmailBody({
        username: `${firstName} ${lastName}`,
        order: {
          number: String(Date.now()),
          date: format(new Date(), 'MMMM dd, yyyy'),
          services: productName,
          amount: productPrice
            ? removeKeyFromString('Price:', productPrice)
            : undefined,
        },
      }),
    });

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: makeEmailBody({
          to: EMAIL_USER,
          from: EMAIL_USER,
          subject: 'New order from Optisence',
          message: `
            <p><b>Full Name:</b> ${firstName} ${lastName}</p>
            <p><b>Service Name:</b> ${productName}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Company Name:</b> ${companyName ?? 'None'}</p>
            <p><b>Company Website:</b> ${companyWebsite ?? 'None'}</p>
            <p><b>Budget:</b> ${budget}</p>
            <p><b>Message:</b> ${message}</p>
          `,
        }),
      },
    });

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: userBody },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to send email. Status: ${res.status}`);
    }

    return { data: res.data, status: res.statusText };
  } catch (err: unknown) {
    console.error('Error order product:', err);

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
