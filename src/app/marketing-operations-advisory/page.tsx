import {
  DownloadPrice,
  Hero,
  HowWeHelp,
  NextSteps,
  OurMarketingServices,
  ReadyMarketingPackages,
  WhyChoose,
} from './components';

export default function MarketingOperationsAdvisory() {
  return (
    <main>
      <Hero />
      <OurMarketingServices />
      <HowWeHelp />
      <ReadyMarketingPackages />
      <DownloadPrice />
      <WhyChoose />
      <NextSteps />
    </main>
  );
}
