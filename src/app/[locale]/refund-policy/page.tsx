import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import {
  ContactList,
  Header,
  HighlightedText,
  PolicyContentLayout,
  PolicyLayout,
  PolicySection,
} from '@/features/policies/components';

import { List } from '@/shared/ui/components/list';
import { Url } from '@/shared/ui/components/url';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const metadata: Metadata = {
  title: 'Refund Policy | Optisence',
  openGraph: {
    title: 'Refund Policy | Optisence',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Optisence',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function RefundPolicy() {
  const t = useTranslations('refundPolicy');

  return (
    <PolicyLayout>
      <Header title={t('title')} updatedOn="05/05/2025" />
      <PolicyContentLayout>
        <PolicySection>
          <Title size="md" as="h3">
            {t('0.title')}
          </Title>
          <Text>
            {t('0.text.0')} <Url value="/" placeholder="www.optisence.com" />,{' '}
            {t('0.text.1')} <HighlightedText>Krouder Pty Ltd</HighlightedText>{' '}
            {t('0.text.2')}{' '}
            <HighlightedText>
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </HighlightedText>{' '}
            {t('0.text.3')} <HighlightedText>334070</HighlightedText>.
            {t('0.text.4')}{' '}
            <HighlightedText>a strict no-refund policy</HighlightedText>{' '}
            {t('0.text.5')}
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
          <Text>{t('2.text')}</Text>
          <List
            values={[
              t('2.values.0'),
              t('2.values.1'),
              t('2.values.2'),
              t('2.values.3'),
            ]}
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('3.title')}
          </Title>
          <Text>
            {t('3.text.0')}{' '}
            <Url
              value="mailto:info@optisence.com"
              placeholder="info@optisence.com"
            />
            . {t('3.text.1')}
          </Text>
          <List
            values={[
              t('3.values.0'),
              t('3.values.1'),
              t('3.values.2'),
              t('3.values.3'),
              t('3.values.4'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('4.title')}
          </Title>
          <Text>{t('4.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('5.title')}
          </Title>
          <Text>{t('5.text.0')}</Text>
          <ContactList />
          <Text>{t('5.text.1')}</Text>
        </PolicySection>
      </PolicyContentLayout>
    </PolicyLayout>
  );
}
