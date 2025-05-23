import type { ReactNode } from 'react';
import { Urbanist } from 'next/font/google';
import Script from 'next/script';

import { CookieConsent } from '@/features/policies/components';
import {
  RequestDialog,
  RequestStepsForm,
} from '@/features/request-form/components';

import { Toaster } from '@/shared/lib/toast';
import { cn } from '@/shared/lib/utils';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { Preloader } from '@/shared/ui/components/preloader';

import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-94D72LRWQJ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94D72LRWQJ');
          `}
        </Script>
      </head>
      <body className={cn(urbanist.variable, 'antialiased')}>
        <Preloader />
        <Header />
        {children}
        <Footer />
        <RequestDialog>
          <RequestStepsForm />
        </RequestDialog>
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
