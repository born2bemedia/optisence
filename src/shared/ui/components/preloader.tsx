'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';

export const Preloader = () => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 200);
    }, 3500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-500',
        isLoading ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <Image
        src="/preloader.gif"
        alt="preloader"
        width={200}
        height={200}
        className={cn(
          'transition-transform duration-500 ease-in-out',
          isLoading ? 'scale-100' : 'scale-150',
        )}
        unoptimized
      />
    </div>
  );
};
