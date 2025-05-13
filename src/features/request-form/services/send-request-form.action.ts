'use server';

import { google } from 'googleapis';

import { contactFormBody } from '@/features/email-letters/components';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody } from '@/shared/lib/utils';

import type { FormValues } from '../lib';

export async function sendRequestForm({
  fullName,
  companyName,
  budget,
  email,
  file,
  contactMethod,
  phone,
  industry,
  projectTimeline,
  corporateGuidance,
  demographics,
  keyObjectives,
  marketingAdvisory,
  points,
  companyWebsite,
}: FormValues) {
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
      `Subject: New message from Request Form`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset="UTF-8"`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `<p><b>Personal & Company Data</b></p>
       <p><b>Full Name:</b> ${fullName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Company Name:</b> ${companyName ?? 'None'}</p>
       <p><b>Company Website:</b> ${companyWebsite ?? 'None'}</p>
       <p><b>Business Needs & Goals</b></p>
       <p><b>Corporate Strategy Guidance:</b> ${corporateGuidance.join(', ')}</p>
       <p><b>Marketing Operations Advisory:</b> ${marketingAdvisory.join(', ')}</p>
       <p><b>Key Objectives:</b> ${keyObjectives}</p>
       <p><b>Challenges or Pain Points:</b> ${points}</p>
       <p><b>Industry:</b> ${industry}</p>
       <p><b>Demographics:</b> ${demographics}</p>
       <p><b>Budget:</b> ${budget}</p>
       <p><b>Business Needs & Goals</b></p>
       <p><b>Project Timeline:</b> ${projectTimeline}</p>
       <p><b>Contact Method:</b> ${contactMethod}</p>`,
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
