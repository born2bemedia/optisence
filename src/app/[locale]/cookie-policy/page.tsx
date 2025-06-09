import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import {
  ContactList,
  Header,
  Heading,
  HighlightedText,
  PolicyContentLayout,
  PolicyLayout,
  PolicySection,
} from '@/features/policies/components';

import { Url } from '@/shared/ui/components/url';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const metadata: Metadata = {
  title: 'Cookie Policy | Optisence',
  openGraph: {
    title: 'Cookie Policy | Optisence',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Optisence',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function CookiePolicy() {
  const t = useTranslations('cookiePolicy');

  return (
    <PolicyLayout>
      <Header title="Cookie Policy" updatedOn="05/05/2025" />
      <PolicyContentLayout>
        <PolicySection>
          <Title size="md" as="h3">
            {t('0.title')}
          </Title>
          <Text>
            {t('0.text.0')} <HighlightedText>Krouder Pty Ltd</HighlightedText>,{' '}
            {t('0.text.1')}{' '}
            <HighlightedText>
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000, South Africa
            </HighlightedText>{' '}
            {t('0.text.2')}{' '}
            <HighlightedText>2025 / 334070 / 07</HighlightedText>{' '}
            {t('0.text.3')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('1.title')}
          </Title>
          <Text>{t('1.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('2.title')}
          </Title>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.0')}</Heading>
            <Text>{t('2.texts.0')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.1')}</Heading>
            <Text>{t('2.texts.1')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.2')}</Heading>
            <Text>{t('2.texts.2')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.3')}</Heading>
            <Text>{t('2.texts.3')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.4')}</Heading>
            <Text>{t('2.texts.4')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.5')}</Heading>
            <Text>{t('2.texts.5')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('2.headings.6')}</Heading>
            <Text>{t('2.texts.6')}</Text>
          </section>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('3.title')}
          </Title>
          <Text>{t('3.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Response to DNT Signals
          </Title>
          <Text>
            {t('4.text.0')}{' '}
            <Url value="/privacy-policy" placeholder="Privacy Policy" />.{' '}
            {t('4.text.1')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('5.title')}
          </Title>
          <Text>{t('5.subtitle')}</Text>
          <section className="flex flex-col gap-3">
            <Heading>{t('5.headings.0')}</Heading>
            <Text>{t('5.texts.0')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('5.headings.1')}</Heading>
            <Text>{t('5.texts.1')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('5.headings.2')}</Heading>
            <Text>{t('5.texts.2')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('5.headings.3')}</Heading>
            <Text>{t('5.texts.3')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>{t('5.headings.4')}</Heading>
            <Text>{t('5.texts.4')}</Text>
          </section>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('6.title')}
          </Title>
          <Text>{t('6.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('7.title')}
          </Title>
          <Text>{t('7.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('8.title')}
          </Title>
          <Text>{t('8.text')}</Text>
          <ContactList />
        </PolicySection>
      </PolicyContentLayout>
    </PolicyLayout>
  );
}
