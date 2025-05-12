'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useWindow } from '@/shared/lib/hooks';
import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons/socials';
import { Button } from '@/shared/ui/kit/button';
import { Dropdown } from '@/shared/ui/kit/dropdown';
import { Text } from '@/shared/ui/kit/text';

import { BurgerMenu } from './burger-menu';

const ContactInfo = () => (
  <div className="flex items-center gap-2.5">
    <Link href="mailto:info@optisence.com">
      <Text size="sm" hover>
        info@optisence.com
      </Text>
    </Link>
    <Link href="tel:+1 000 000 000">
      <Text size="sm">+1 000 000 000</Text>
    </Link>
  </div>
);

const SocialIcons = () => (
  <div className="flex items-center gap-2.5">
    <Link href="#">
      <FacebookIcon />
    </Link>
    <Link href="#">
      <InstagramIcon />
    </Link>
    <Link href="#">
      <XIcon />
    </Link>
  </div>
);

const NavigationMenu = () => (
  <section className="flex items-center gap-6">
    <Link href="/">
      <Text hover>Home</Text>
    </Link>
    <Link href="/who-we-are">
      <Text hover>Who We Are</Text>
    </Link>
    <Dropdown
      value="Consulting Solutions"
      options={[
        {
          label: (
            <Link href="/marketing-operations-advisory">
              Marketing Operations Advisory
            </Link>
          ),
          value: '/marketing-operations-advisory',
        },
        {
          label: (
            <Link href="/corporate-strategy-guidance">
              Corporate Strategy Guidance
            </Link>
          ),
          value: '/corporate-strategy-guidance',
        },
      ]}
    />
    <Text hover>Industries We Shape</Text>
    <Text hover>Our Work</Text>
    <Text hover>Careers</Text>
    <Link href="/media-center/5-signs-your-business">
      <Text hover>Media Center</Text>
    </Link>
  </section>
);

export const Header = () => {
  const { width } = useWindow();

  return (
    <header>
      {width > 1024 ? (
        <>
          <section className="flex items-center justify-between bg-[#F9FAFF] px-6 py-3">
            <ContactInfo />
            <SocialIcons />
          </section>
          <section className="flex items-center justify-between px-6 py-3">
            <Image
              src="/full-logo.svg"
              alt="Optisence"
              width={132}
              height={34}
            />
            <NavigationMenu />
            <Link href="/contact-us">
              <Button size="sm">Contact</Button>
            </Link>
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
