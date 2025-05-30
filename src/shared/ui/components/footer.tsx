'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

/**import {
  FacebookFillIcon,
  InstagramFillIcon,
  XFillIcon,
} from '@/shared/ui/icons/socials'; */
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

export function Footer() {
  const tf = useTranslations('footer');
  const th = useTranslations('header');
  const tf = useTranslations('footer');
  const th = useTranslations('header');
  const { setOpen } = useRequestDialogStore();
  const locale = useLocale();

  return (
    <footer className="flex flex-col gap-12 border-t border-[#F2F2F2] py-[72px] max-md:py-8">
      <section className="flex justify-between gap-16 px-[100px] max-lg:flex-col max-md:px-8">
        <div className="flex flex-col gap-8 max-lg:items-center max-lg:text-center">
          <section className="flex flex-col gap-3">
            <Image
              src="/full-logo.svg"
              alt="Optisence"
              width={132}
              height={34}
            />
            <Text className="w-[350px] max-sm:w-full">{tf('description')}</Text>
            <Text className="w-[350px] max-sm:w-full">{tf('description')}</Text>
          </section>
          <section className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 max-lg:justify-center">
              {/**<XFillIcon />
              <InstagramFillIcon />
              <FacebookFillIcon /> */}
            </div>
            <div className="flex items-center gap-2.5">
              <Link href="mailto:info@optisence.com">
                <Text color="dark" hover>
                  info@optisence.com
                </Text>
              </Link>
              <Link href="tel:+27218913127">
                <Text color="dark">+27218913127</Text>
              </Link>
            </div>
          </section>
          <ul className="flex flex-col gap-3">
            <li>
              {tf('registeredAddress')} <br />
              {tf('registeredAddress')} <br />
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </li>
            <li>
              {tf('officeAddress')} <br />
              {tf('officeAddress')} <br />
              Office 706, 7th Floor, 134 Bree Street, Cape Town City Centre,
              Cape Town, Western Cape, 8000, South Africa
            </li>
            <li>{tf('registeredNumber')}: 334070</li>
            <li>{tf('registeredNumber')}: 334070</li>
            <li>Krouder Pty Ltd.</li>
          </ul>
        </div>
        <div className="flex gap-6 max-2xl:w-full max-md:grid max-md:grid-cols-2">
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              {th('consultingSolutions')}
              {th('consultingSolutions')}
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${locale}/marketing-operations-advisory`}>
                  <Text hover>{th('links.2')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/corporate-strategy-guidance`}>
                  <Text hover>{th('links.3')}</Text>
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              {tf('company')}
              {tf('company')}
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${locale}/who-we-are`}>
                  <Text hover>{th('links.1')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/industries-we-shape`}>
                  <Text hover>{th('links.4')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`}>
                  <Text hover>{th('links.6')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/media-center/5-signs-your-business`}>
                  <Text hover>{th('links.7')}</Text>
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              {tf('startWithOptisence')}
              {tf('startWithOptisence')}
            </Text>
            <ul className="flex flex-col gap-3">
              <li onClick={() => setOpen(true)}>
                <Text hover>{tf('getConsultation')}</Text>
                <Text hover>{tf('getConsultation')}</Text>
              </li>
              <li>
                <Link href={`/${locale}/our-work`}>
                  <Text hover>{th('links.5')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact-us`}>
                  <Text hover>{th('links.8')}</Text>
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              {tf('policies.title')}
              {tf('policies.title')}
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${locale}/terms-and-conditions`}>
                  <Text hover>{tf('policies.termsAndConditions')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy-policy`}>
                  <Text hover>{tf('policies.privacyPolicy')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/refund-policy`}>
                  <Text hover>{tf('policies.refundPolicy')}</Text>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cookie-policy`}>
                  <Text hover>{tf('policies.cookiePolicy')}</Text>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section className="px-[100px] max-md:px-8">
        <Divider />
      </section>
      <section className="px-[100px] text-center max-md:px-8">
        © {new Date().getFullYear()} Optisence. {tf('allLegalRightsReserved')}
        © {new Date().getFullYear()} Optisence. {tf('allLegalRightsReserved')}
      </section>
    </footer>
  );
}
