import {
  Banners,
  ClientReviews,
  ConsultingSolutions,
  Hero,
  Industries,
  OurValues,
  WhyChooseUs,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ConsultingSolutions />
      <Industries />
      <OurValues />
      <ClientReviews />
      <Banners />
    </main>
  );
}
