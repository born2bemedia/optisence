import type { Metadata } from 'next';

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
  return (
    <PolicyLayout>
      <Header title="Refund Policy" updatedOn="05/05/2025" />
      <PolicyContentLayout>
        <PolicySection>
          <Title size="md" as="h3">
            General Refund Policy Information
          </Title>
          <Text>
            We appreciate your decision to choose Optisence at{' '}
            <Url value="/" placeholder="www.optisence.com" />, operated by{' '}
            <HighlightedText>Krouder Pty Ltd</HighlightedText> with its
            registered address at{' '}
            <HighlightedText>
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </HighlightedText>{' '}
            with registered number <HighlightedText>334070</HighlightedText>.
            However, it’s important to note that we have{' '}
            <HighlightedText>a strict no-refund policy</HighlightedText> for all
            services and products purchased through our website. Once a
            transaction is completed, it is considered final.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Responsibilities of the Customer
          </Title>
          <Text>
            Customers bear full responsibility for their purchasing decisions on
            our platform. We urge customers to thoroughly review all information
            and specifications about the services or products they intend to
            purchase before making a decision.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Refund Eligibility Requirements
          </Title>
          <Text>
            Customers bear full responsibility for their purchasing decisions on
            our platform. We urge customers to thoroughly review all information
            and specifications about the services or products they intend to
            purchase before making a decision.
          </Text>
          <List
            values={[
              'Erroneous Payments: Instances where accidental or duplicate payments occur.',
              'Incorrect Payment Amount: Cases where customers are charged an incorrect amount due to technical or clerical errors on our part.',
              'Payment Using Wrong Details: Situations where evidence is provided of a payment made using incorrect payment details, leading to an unsuccessful transaction.',
              'Non-Delivery of Service or Product: Instances where the purchased service or product is not delivered as described for reasons within our control.',
            ]}
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Steps to Request a Refund
          </Title>
          <Text>
            If you believe your situation falls under one of the exceptional
            circumstances mentioned above, you can submit a refund request to
            our customer support team at{' '}
            <Url
              value="mailto:info@optisence.com"
              placeholder="info@optisence.com"
            />
            . Please include the following details in your refund request:
          </Text>
          <List
            values={[
              'Your full name',
              'Email Address Used for the Purchase',
              'Transaction Date',
              'Transaction ID or Receipt',
              'Detailed Explanation of the Issue',
            ]}
            noHighlight
          />
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Review and Processing of Refund Requests
          </Title>
          <Text>
            Upon receipt of your refund request, our team will thoroughly review
            the provided information. We aim to respond to all refund requests
            within 7 business days. Our decision regarding the refund request
            will be based on the validity of the circumstances presented and our
            policies.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Contact Information
          </Title>
          <Text>
            If you have any questions or need further clarification regarding
            our Refund Policy, please don’t hesitate to contact our customer
            support team:
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
          <Text>
            Please be aware that this Refund Policy is subject to change without
            prior notice. We recommend that you review it periodically for
            updates.
          </Text>
        </PolicySection>
      </PolicyContentLayout>
    </PolicyLayout>
  );
}
