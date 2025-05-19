'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { cn, lsRead, lsWrite } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = lsRead('isCookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    lsWrite('isCookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => setIsVisible(false);

  return (
    <div
      className={cn(
        'fixed right-6 bottom-6 z-20 flex w-[350px] max-w-full flex-col rounded-3xl border border-[#DBDBDB] bg-white p-6 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)] max-md:right-1/2 max-md:w-[calc(100%-3rem)] max-md:translate-x-1/2',
        !isVisible && 'hidden',
      )}
    >
      <Text color="dark" weight={500} size="2xl">
        Cookie settings
      </Text>
      <Text size="sm" className="mt-3 mb-4">
        Cookies help us improve our website. By clicking &apos;Accept,&apos; you
        agree to our use of cookies for functionality, analytics, and
        personalized content. Learn more in our{' '}
        <Link href="/legal/cookie-policy" className="underline">
          Cookie Policy
        </Link>
        .
      </Text>
      <div className="flex items-center gap-6">
        <Button
          variant="faded"
          onClick={handleDecline}
          textAlign="center"
          className="text-sm"
          fullWidth
        >
          Decline
        </Button>
        <Button
          onClick={handleAccept}
          textAlign="center"
          className="text-sm"
          fullWidth
        >
          Accept
        </Button>
      </div>
    </div>
  );
};
