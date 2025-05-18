import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import {
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
  title: 'Terms and Conditions | Optisence',
  openGraph: {
    title: 'Terms and Conditions | Optisence',
    images: 'https://optisence.com/images/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Optisence',
    images: ['https://optisence.com/images/meta.jpg'],
  },
};

export default function TermsAndConditions() {
  const t = useTranslations('termsAndConditions');

  return (
    <PolicyLayout>
      <Header title={t('title')} updatedOn="05/05/2025" />
      <PolicyContentLayout>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.0.title')}
          </Title>
          <Text>
            {t('sections.0.text.0')}{' '}
            <HighlightedText>Krouder Pty Ltd</HighlightedText>,{' '}
            {t('sections.0.text.1')}{' '}
            <HighlightedText>
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </HighlightedText>
            .
          </Text>
          <Text>{t('sections.0.text.2')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.1.title')}
          </Title>
          <Text>
            {t('sections.1.text.0')}{' '}
            <HighlightedText>Krouder Pty Ltd</HighlightedText>{' '}
            {t('sections.1.text.1')}(
            <Url value="/" placeholder="www.optisence.com" />){' '}
            {t('sections.1.text.2')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Key Terms and Definitions
          </Title>
          <Text>For these Terms and Conditions:</Text>
          <List
            values={[
              t('sections.2.values.0'),
              <span key="company">
                <span className="text-primary">
                  {t('sections.2.values.1.0')}
                </span>{' '}
                {t('sections.2.values.1.1')}{' '}
                <span className="text-primary">Krouder Pty Ltd</span>{' '}
                {t('sections.2.values.1.2')}{' '}
                <span className="text-primary">
                  134 Bree Street, Cape Town City Centre, Cape Town, Western
                  Cape, 8000
                </span>{' '}
                {t('sections.2.values.1.3')}{' '}
                <span className="text-primary">334070</span>),{' '}
                {t('sections.2.values.1.4')},
              </span>,
              <span key="country">
                <span className="text-primary">
                  {t('sections.2.values.2.0')}
                </span>{' '}
                {t('sections.2.values.2.1')}{' '}
                <span className="text-primary">
                  {t('sections.2.values.2.2')}
                </span>
                .
              </span>,
              t('sections.2.values.3'),
              t('sections.2.values.4'),
              t('sections.2.values.5'),
              <span key="website">
                <span className="text-primary">
                  {t('sections.2.values.6.0')}
                </span>
                , {t('sections.2.values.6.1')}{' '}
                <Url value="/" placeholder="www.optisence.com" />.
              </span>,
              t('sections.2.values.7'),
            ]}
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.3.title')}
          </Title>
          <Text>
            {t('sections.3.text.0')}{' '}
            <HighlightedText>{t('sections.3.text.1')}</HighlightedText>,{' '}
            {t('sections.3.text.2')} <HighlightedText>18</HighlightedText>{' '}
            {t('sections.3.text.3')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.4.title')}
          </Title>
          <Text>{t('sections.4.text')}</Text>
          <List
            values={[
              t('sections.4.values.0'),
              t('sections.4.values.1'),
              t('sections.4.values.2'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.5.title')}
          </Title>
          <Text>{t('sections.5.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.6.title')}
          </Title>
          <Text>{t('sections.6.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.7.title')}
          </Title>
          <Text>{t('sections.7.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.8.title')}
          </Title>
          <Text>{t('sections.8.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.9.title')}
          </Title>
          <Text>{t('sections.9.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.10.title')}
          </Title>
          <Text>{t('sections.10.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.11.title')}
          </Title>
          <Text>{t('sections.11.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.12.title')}
          </Title>
          <Text>{t('sections.12.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.13.title')}
          </Title>
          <Text>{t('sections.13.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.14.title')}
          </Title>
          <Text>
            {t('sections.14.text.0')}{' '}
            <Url value="/cookie-policy" placeholder="Cookie Policy" />{' '}
            {t('sections.14.text.1')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.15.title')}
          </Title>
          <Text>{t('sections.15.text')}</Text>
          <List
            values={[
              t('sections.15.values.0'),
              t('sections.15.values.1'),
              t('sections.15.values.2'),
              t('sections.15.values.3'),
              t('sections.15.values.4'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.16.title')}
          </Title>
          <Text>{t('sections.16.text.0')}</Text>
          <Text>{t('sections.16.text.1')}</Text>
          <List
            values={[
              t('sections.16.values.0'),
              t('sections.16.values.1'),
              t('sections.16.values.2'),
              t('sections.16.values.3'),
              t('sections.16.values.4'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Liability Limitation
          </Title>
          <Text>
            Notwithstanding any damages you might incur, the entire liability of
            Optisence and any of its suppliers under any provision of this
            Agreement and your exclusive remedy for all of the previous shall be
            limited to the amount actually paid by you for the website. To the
            maximum extent permitted by applicable law, in no event shall
            Optisence or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, for loss of data or other
            information, for business interruption, for personal injury, for
            loss of privacy arising out of or in any way related to the use of
            or inability to use the website, third-party software and/or
            third-party hardware used with the website, or otherwise in
            connection with any provision of this Agreement), even if Optisence
            or any supplier has been advised of the possibility of such damages
            and even if the remedy fails of its essential purpose. Some
            jurisdictions do not allow the exclusion or limitation of incidental
            or consequential damages, so the above limitation or exclusion may
            not apply to you.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.18.title')}
          </Title>
          <Text>{t('sections.18.text')}</Text>
          <List
            values={[
              t('sections.18.values.0'),
              t('sections.18.values.1'),
              t('sections.18.values.2'),
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.19.title')}
          </Title>
          <Text>
            {t('sections.19.text.0')}{' '}
            <Url value="/privacy-policy" placeholder="Privacy Policy" />{' '}
            {t('sections.19.text.1')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.20.title')}
          </Title>
          <Text>{t('sections.20.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.21.title')}
          </Title>
          <Text>{t('sections.21.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.22.title')}
          </Title>
          <Text>
            {t('sections.22.text.0')}
            <br />
            {t('sections.22.text.1')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.23.title')}
          </Title>
          <Text>
            {t('sections.23.text.0')}{' '}
            <HighlightedText>{t('sections.23.text.1')}</HighlightedText>{' '}
            {t('sections.23.text.2')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.24.title')}
          </Title>
          <Text>{t('sections.24.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.24.title')}
          </Title>
          <Text>
            {t('sections.25.text.0')}{' '}
            <HighlightedText>{t('sections.25.text.1')}</HighlightedText>{' '}
            {t('sections.25.text.2')}
            <HighlightedText>{t('sections.25.text.3')}</HighlightedText>{' '}
            {t('sections.25.text.4')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.26.title')}
          </Title>
          <Text>
            {t('sections.26.text.0')}{' '}
            <Url
              value="mailto:info@optisence.com"
              placeholder="info@optisence.com"
            />
            . {t('sections.26.text.1')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.27.title')}
          </Title>
          <Text>
            {t('sections.27.text.0')}{' '}
            <HighlightedText>{t('sections.27.text.1')}</HighlightedText>,
            {t('sections.27.text.2')}{' '}
            <HighlightedText>{t('sections.27.text.3')}</HighlightedText>{' '}
            {t('sections.27.text.4')}
          </Text>
          <Text>
            {t('sections.27.text.5')}{' '}
            <HighlightedText>{t('sections.27.text.6')}</HighlightedText>{' '}
            {t('sections.27.text.7')}{' '}
            <HighlightedText>{t('sections.27.text.8')}</HighlightedText>
            {t('sections.27.text.9')}
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.28.title')}
          </Title>
          <Text>{t('sections.28.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.29.title')}
          </Title>
          <Text>{t('sections.29.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.30.title')}
          </Title>
          <Text>{t('sections.30.text')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            {t('sections.31.title')}
          </Title>
          <Text>{t('sections.31.text.0')}</Text>
          <Text>{t('sections.31.text.1')}</Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Contact Information
          </Title>
          <Text>
            If you have any questions or concerns regarding these Terms and
            Conditions, please do not hesitate to contact us at:
          </Text>
          <List
            values={[
              {
                text: 'Email: info@optisence.com',
                href: 'mailto:info@optisence.com',
              },
              {
                text: 'Phone number: +27218913127',
                href: 'tel:+27218913127',
              },
              {
                text: 'Visit our Contact page: Contact Us',
                href: '/contact-us',
              },
            ]}
          />
        </PolicySection>
      </PolicyContentLayout>
    </PolicyLayout>
  );
}
