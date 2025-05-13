import { OrderDialog } from '@/features/order/components';
import { DownloadPrice } from '@/features/package/components';

import {
  Hero,
  HowWeHelp,
  NextSteps,
  OurStrategyServices,
  ReadyStrategyPackages,
  WhyChoose,
} from './components';

export default function CorporateStrategyGuidance() {
  return (
    <main>
      <Hero />
      <OurStrategyServices />
      <HowWeHelp />
      <ReadyStrategyPackages />
      <DownloadPrice />
      <OrderDialog />
      <WhyChoose />
      <NextSteps />
    </main>
  );
}
