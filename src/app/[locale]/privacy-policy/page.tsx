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
  title: 'Privacy Policy | Optisence',
  openGraph: {
    title: 'Privacy Policy | Optisence',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Optisence',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function PrivacyPolicy() {
  const t = useTranslations('privacyPolicy');

  return (
    <PolicyLayout>
      <Header title={t('title')} updatedOn="05/05/2025" />
      <PolicyContentLayout>
        <PolicySection>
          <Title size="md" as="h3">
            {t('0.title')}
          </Title>
          <Text>{t('0.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('1.title')}
          </Title>
          <List
            values={[
              t('1.values.0'),
              <span key="company">
                <span className="text-primary">{t('1.values.1.0')}:</span>{' '}
                {t('1.values.1.1')}{' '}
                <span className="text-primary">Krouder Pty Ltd</span> (
                {t('1.values.1.2')}{' '}
                <span className="text-primary">
                  134 Bree Street, Cape Town City Centre, Cape Town, Western
                  Cape, 8000
                </span>{' '}
                {t('1.values.1.3')} <span className="text-primary">334070</span>{' '}
                {t('1.values.1.4')}.
              </span>,
              <span key="country">
                <span className="text-primary">{t('1.values.2.0')}:</span>{' '}
                {t('1.values.2.1')}
                <span className="text-primary"> {t('1.values.2.2')}</span>.
              </span>,
              t('1.values.3'),
              t('1.values.4'),
              t('1.values.5'),
              t('1.values.6'),
              t('1.values.7'),
              t('1.values.8'),
              t('1.values.9'),
              <span key="website">
                <span className="text-primary">
                  {t('1.values.10.0')}: Krouder Pty Ltd’s
                </span>
                {t('1.values.10.1')}{' '}
                <Url value="/" placeholder="www.optisence.com" />.
              </span>,
              t('1.values.11'),
            ]}
          />
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
              t('2.values.4'),
              t('2.values.5'),
              t('2.values.6'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('3.title')}
          </Title>
          <Text>{t('3.text')}</Text>
          <List
            values={[
              t('3.values.0'),
              t('3.values.1'),
              t('3.values.2'),
              t('3.values.3'),
              t('3.values.4'),
              t('3.values.5'),
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
          <Text>{t('5.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('6.title')}
          </Title>
          <Text>{t('6.text.0')}</Text>
          <Text>{t('6.text.1')}</Text>
          <Text>{t('6.text.2')}</Text>
          <Text>{t('6.text.3')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('7.title')}
          </Title>
          <Text>{t('7.text.0')}</Text>
          <Text>{t('7.text.1')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('8.title')}
          </Title>
          <Text>{t('8.text.0')}</Text>
          <Text>{t('8.text.1')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('9.title')}
          </Title>
          <Text>{t('9.text.0')}</Text>
          <Text>{t('9.text.1')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('10.title')}
          </Title>
          <Text>{t('10.text.0')}</Text>
          <Text>{t('10.text.1')}</Text>
          <List
            values={[t('10.values.0'), t('10.values.1'), t('10.values.2')]}
            noHighlight
          />
          <Text>{t('10.text.2')}</Text>
          <Text>{t('10.text.3')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('11.title')}
          </Title>
          <Text>{t('11.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('12.title')}
          </Title>
          <Text>
            {t('12.text.0')} <HighlightedText>{t('12.text.1')}</HighlightedText>{' '}
            {t('12.text.2')} <HighlightedText>{t('12.text.3')}</HighlightedText>
            , {t('12.text.4')}
          </Text>
          <Text>{t('12.text.5')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('13.title')}
          </Title>
          <Text>{t('13.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('14.title')}
          </Title>
          <Text>{t('14.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('15.title')}
          </Title>
          <Text>{t('15.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('16.title')}
          </Title>
          <Text color="primary" size="lg">
            {t('16.text.0.heading')}
          </Text>
          <List
            values={[
              t('16.text.0.values.0'),
              t('16.text.0.values.1'),
              t('16.text.0.values.2'),
            ]}
            noHighlight
          />
          <Text color="primary" size="lg">
            {t('16.text.1.heading')}
          </Text>
          <List values={[t('16.text.1.values')]} noHighlight />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('17.title')}
          </Title>
          <Text>{t('17.text.0')}</Text>
          <Text>{t('17.text.1')}</Text>
          <List
            values={[
              t('17.values.0'),
              t('17.values.1'),
              t('17.values.2'),
              t('17.values.3'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('18.title')}
          </Title>
          <Text>{t('18.text.0')}</Text>
          <Text>{t('18.text.1')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('19.title')}
          </Title>
          <Text>{t('19.text')}</Text>
          <ContactList />
        </PolicySection>
      </PolicyContentLayout>
    </PolicyLayout>
  );
}
