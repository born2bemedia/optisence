'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { useWindow } from '@/shared/lib/hooks';
//import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons/socials';
import { Button } from '@/shared/ui/kit/button';
import { Dropdown } from '@/shared/ui/kit/dropdown';
import { Text } from '@/shared/ui/kit/text';

import { BurgerMenu } from './burger-menu';
import { LangSwitcher } from './lang-switcher';

const ContactInfo = () => (
  <div className="flex items-center gap-2.5">
    <Link href="mailto:info@optisence.com">
      <Text size="sm" hover>
        info@optisence.com
      </Text>
    </Link>
    <Link href="tel:+27218913127">
      <Text size="sm">+27218913127</Text>
    </Link>
  </div>
);

/* const SocialIcons = () => (
  <div className="flex items-center gap-2.5">
    <Link href="#">
      <span className="group">
        <FacebookIcon className="group-hover:[&>path]:fill-primary transition duration-300 ease-in-out group-hover:scale-110" />
      </span>
    </Link>
    <Link href="#">
      <span className="group">
        <InstagramIcon className="group-hover:[&>path]:fill-primary transition duration-300 ease-in-out group-hover:scale-110" />
      </span>
    </Link>
    <Link href="#">
      <span className="group">
        <XIcon className="group-hover:[&>g>path]:fill-primary transition duration-300 ease-in-out group-hover:scale-110" />
      </span>
    </Link>
  </div>
); */

const NavigationMenu = () => {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <section className="flex items-center gap-6">
      <Link href={`/${locale}`}>
        <Text hover>{t('links.0')}</Text>
      </Link>
      <Link href={`/${locale}/who-we-are`}>
        <Text hover>{t('links.1')}</Text>
      </Link>
      <Dropdown
        value={t('consultingSolutions')}
        options={[
          {
            label: (
              <Link href={`/${locale}/marketing-operations-advisory`}>
                {t('links.2')}
              </Link>
            ),
            value: '/marketing-operations-advisory',
          },
          {
            label: (
              <Link href={`/${locale}/corporate-strategy-guidance`}>
                {t('links.3')}
              </Link>
            ),
            value: '/corporate-strategy-guidance',
          },
        ]}
      />
      <Link href={`/${locale}/industries-we-shape`}>
        <Text hover>{t('links.4')}</Text>
      </Link>
      <Link href={`/${locale}/our-work`}>
        <Text hover>{t('links.5')}</Text>
      </Link>
      <Link href={`/${locale}/careers`}>
        <Text hover>{t('links.6')}</Text>
      </Link>
      <Link href={`/${locale}/media-center/5-signs-your-business`}>
        <Text hover>{t('links.7')}</Text>
      </Link>
    </section>
  );
};

export const Header = () => {
  const t = useTranslations('header.links');
  const locale = useLocale();

  const { width } = useWindow();

  return (
    <header>
      {width > 1024 ? (
        <>
          <section className="flex items-center justify-between bg-[#F9FAFF] px-6 py-3">
            <ContactInfo />
            {/* <SocialIcons /> */}
          </section>
          <section className="flex items-center justify-between px-6 py-3">
            <Link href={`/${locale}`}>
              <Image
                src="/full-logo.svg"
                alt="Optisence"
                width={132}
                height={34}
              />
            </Link>
            <NavigationMenu />
            <div className="flex items-center gap-3">
              <LangSwitcher />
              <Link href={`/${locale}/contact-us`}>
                <Button size="sm">{t('8')}</Button>
              </Link>
            </div>
          </section>
        </>
      ) : (
        <section className="flex items-center justify-between border-b border-[#F2F2F2] px-6 py-3">
          <Image src="/full-logo.svg" alt="Optisence" width={132} height={34} />
          <BurgerMenu />
        </section>
      )}
    </header>
  );
};
