import {
  Header,
  Heading,
  HighlightedText,
  PolicyContentLayout,
  PolicyLayout,
  PolicySection,
} from '@/features/policies/components';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default function CookiePolicy() {
  return (
    <PolicyLayout>
      <Header title="Cookie Policy" updatedOn="05/05/2025" />
      <PolicyContentLayout>
        <PolicySection>
          <Title size="md" as="h3">
            General Refund Policy Information
          </Title>
          <Text>
            This Cookie Policy explains how{' '}
            <HighlightedText>Krouder Pty Ltd</HighlightedText>, with its
            registered address at{' '}
            <HighlightedText>
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </HighlightedText>{' '}
            with registered number <HighlightedText>334070</HighlightedText>{' '}
            (referred to as “we,” “us,” or “our”), uses cookies and similar
            technologies on our website. By continuing to use our site, you
            consent to our use of cookies as outlined in this Policy. We
            encourage you to read this document thoroughly to understand how we
            collect, use, and manage cookies.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            What Are Cookies?
          </Title>
          <Text>
            Cookies are small text files that websites store on your device
            (such as a computer, smartphone, or tablet) when you visit them.
            They serve various functions, including recognizing your device,
            storing preferences, and improving user experience.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Types of Cookies
          </Title>
          <section className="flex flex-col gap-3">
            <Heading>Essential Cookies</Heading>
            <Text>
              Essential cookies are integral to the proper functioning of our
              website. They enable basic features such as page navigation and
              access to secure areas. Certain services you request, such as
              accessing secure areas, cannot be provided without these cookies.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Functional Cookies</Heading>
            <Text>
              Functional cookies allow our website to remember your choices and
              provide enhanced, personalised features. They may customise text
              size, fonts, and other elements to align with your preferences,
              improving your overall browsing experience.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Analytics Cookies</Heading>
            <Text>
              Analytics cookies help us understand how visitors interact with
              our website by collecting and reporting information anonymously.
              This data allows us to identify trends, optimise website
              performance, and enhance user experience.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Advertising Cookies</Heading>
            <Text>
              Advertising cookies deliver advertisements tailored to your
              interests and preferences. They also help limit the frequency of
              ads you see and measure the effectiveness of advertising
              campaigns. Advertising networks typically place these cookies with
              the website operator’s consent.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Social Media Cookies</Heading>
            <Text>
              Social media cookies are set by social media services integrated
              into our website. These cookies enable you to share our content
              with your networks. These cookies may also track your browser
              activity across other sites to create a profile of your interests
              and personalise the content you see.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Session Cookies</Heading>
            <Text>
              Session cookies are temporary and can be deleted from your device
              after browsing. They are essential for our website to operate
              efficiently and maintain security during your visit.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Persistent Cookies</Heading>
            <Text>
              Persistent cookies remain on your device for a specified duration
              and are reactivated each time you visit the website that placed
              them. They serve various purposes, such as remembering your login
              credentials or preferences.
              <br /> Please note that blocking certain cookies may affect your
              experience on our website. You can manage your cookie preferences
              through your browser settings.
            </Text>
          </section>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Do Not Track (DNT) Signals
          </Title>
          <Text>
            “Do Not Track” is a browser feature that allows users to opt out of
            website tracking, including analytics and advertising. While DNT is
            a user preference, its effectiveness depends on website responses.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Response to DNT Signals
          </Title>
          <Text>
            Optisence respects DNT signals and limits data collection
            accordingly. When we detect a DNT signal from your browser, we
            adjust our data collection practices as described in our Privacy
            Policy. However, please note that enabling DNT may affect the
            functionality and personalization of some parts of our website.
            <br /> It is essential to review individual website policies and
            services for their response to DNT signals, as third-party services
            may have different policies.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            How We Use Cookies
          </Title>
          <Text>Optisence uses cookies for various purposes:</Text>
          <section className="flex flex-col gap-3">
            <Heading>Essential Cookies</Heading>
            <Text>
              Essential cookies facilitate the correct functioning of our
              website, enabling basic features such as page navigation and form
              submissions.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Analytical/Performance Cookies</Heading>
            <Text>
              Analytical cookies help us understand how visitors interact with
              our website by collecting data on visited pages and error
              messages. This information allows us to identify areas for
              improvement and enhance user experience.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Functionality Cookies</Heading>
            <Text>
              Functionality cookies remember your choices (such as language
              preferences) and provide enhanced, personalised features to
              improve your browsing experience.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Targeting/Advertising Cookies</Heading>
            <Text>
              Targeting cookies delivers advertisements relevant to your
              interests and measures the effectiveness of advertising campaigns.
              These cookies may limit the number of times you see an ad and help
              us optimise our marketing efforts.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <Heading>Third-Party Cookies</Heading>
            <Text>
              Optisence may use third-party services, such as Google Analytics
              and social media platforms, which may employ cookies. For more
              information on how these services use cookies and handle your
              data, refer to their privacy policies.
            </Text>
          </section>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            How We Use Cookies
          </Title>
          <Text>
            You can manage cookie preferences within your browser settings. Most
            browsers allow you to block or delete cookies, but this may affect
            website functionality. Refer to your browser’s help documentation
            for instructions on managing cookies.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Updates to This Cookie Policy
          </Title>
          <Text>
            This Cookie Policy may be updated periodically to reflect changes in
            cookie usage. We recommend reviewing this Policy periodically to
            stay informed about our practices.
          </Text>
        </PolicySection>
        <PolicySection>
          <Title size="md" as="h3">
            Contact Information
          </Title>
          <Text>For any questions you have, please get in touch with us:</Text>
          <List
            values={[
              {
                text: 'Email: info@optisence.com',
                href: 'mailto:info@optisence.com',
              },
              'Phone number: NUMBER',
              { text: 'Visit our Contact page: Contact Us', href: '/contact' },
            ]}
          />
        </PolicySection>
      </PolicyContentLayout>
    </PolicyLayout>
  );
}
