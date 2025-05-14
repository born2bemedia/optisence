'use server';

import { google } from 'googleapis';

import { contactFormBody } from '@/features/email-letters/components';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody } from '@/shared/lib/utils';

import type { ApplicationFormSchema } from '../lib';

export async function sendApplication({
  fullName,
  email,
  message,
  phone,
  role,
  file,
  portfolio,
}: ApplicationFormSchema) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    let fileBase64 = '';
    if (file) {
      const fileContent = await file.arrayBuffer();
      fileBase64 = Buffer.from(fileContent).toString('base64');
    }

    const boundary = 'foo_bar_baz';
    const mimeMessage = [
      `From: ${EMAIL_USER}`,
      `To: ${EMAIL_USER}`,
      `Subject: New message from Careers Form`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset="UTF-8"`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `
       <p><b>Full Name:</b> ${fullName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Role:</b> ${role}</p>
       <p><b>portfolio:</b> ${portfolio}</p>
       <p><b>Business Needs & Goals</b></p>
       <p><b>Message:</b> ${message}</p>`,
      ...(file
        ? [
            ``,
            `--${boundary}`,
            `Content-Type: ${file.type}`,
            `Content-Disposition: attachment; filename="${file.name}"`,
            `Content-Transfer-Encoding: base64`,
            ``,
            fileBase64,
          ]
        : []),
      ``,
      `--${boundary}--`,
    ].join('\n');

    const userBody = makeEmailBody({
      to: email,
      from: EMAIL_USER,
      subject:
        "We've Received Your Inquiry - Thank You for Contacting Optisence!",
      message: contactFormBody({ username: fullName }),
    });

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: Buffer.from(mimeMessage).toString('base64'),
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
