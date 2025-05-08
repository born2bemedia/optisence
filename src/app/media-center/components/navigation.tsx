'use client';

import { MediaNavigation } from '@/features/media-center/components';

import { FadeIn } from '@/shared/ui/components/fade-in';

export const Navigation = () => {
  return (
    <FadeIn className="px-[100px] pb-[80px] max-sm:px-4 max-sm:pb-8">
      <MediaNavigation />
    </FadeIn>
  );
};
