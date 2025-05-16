'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { ChevronDown, MenuIcon } from '@/shared/ui/icons/outline';
import { FacebookFillIcon } from '@/shared/ui/icons/socials';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';

import { LangSwitcher } from './lang-switcher';

export const BurgerMenu = () => {
  const t = useTranslations('header');
  const [open, setOpen] = useState(false);
  const [showConsulting, setShowConsulting] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className="cursor-pointer transition duration-300 ease-in-out hover:opacity-60">
          <MenuIcon />
        </button>
      </Trigger>
      <Portal>
        <Content className="fixed bottom-0 left-0 z-[995] h-[96%] w-screen animate-[menuOpen_0.3s_ease-out_forwards] overflow-y-auto bg-black/85 p-6 backdrop-blur-md max-sm:h-[94%]">
          <Title />
          <Description asChild>
            <section className="flex h-full flex-col">
              <section className="flex flex-col gap-3 text-white">
                <Link className="p-3" href="/">
                  {t('links.0')}
                </Link>
                <Divider color="dark" />
                <Link className="p-3" href="/who-we-are">
                  {t('links.1')}
                </Link>
                <Divider color="dark" />
                <button
                  className="flex cursor-pointer items-center justify-between p-3"
                  onClick={() => setShowConsulting(!showConsulting)}
                >
                  {t('consultingSolutions')} <ChevronDown color="#fff" />
                </button>
                {showConsulting && (
                  <>
                    <Link
                      className="p-3 text-[rgba(255,255,255,0.6)]"
                      href="/marketing-operations-advisory"
                    >
                      {t('links.2')}
                    </Link>
                    <Link
                      className="p-3 text-[rgba(255,255,255,0.6)]"
                      href="/corporate-strategy-guidance"
                    >
                      {t('links.3')}
                    </Link>
                  </>
                )}
                <Divider color="dark" />
                <Link className="p-3" href="/industries-we-shape">
                  {t('links.4')}
                </Link>
                <Divider color="dark" />
                <Link className="p-3" href="/our-work">
                  {t('links.5')}
                </Link>
                <Divider color="dark" />
                <Link className="p-3" href="/careers">
                  {t('links.6')}
                </Link>
                <Divider color="dark" />
                <Link
                  className="p-3"
                  href="/media-center/5-signs-your-business"
                >
                  {t('links.7')}
                </Link>
              </section>
              <section className="mt-6 flex w-full items-center gap-3">
                <LangSwitcher />
                <Link href="/contact-us" className="w-full">
                  <Button textAlign="center" fullWidth>
                    {t('links.8')}
                  </Button>
                </Link>
              </section>
              <footer className="mt-auto flex flex-col items-center justify-center gap-6 py-6 text-white">
                <section className="flex items-center gap-2.5">
                  <Link href="mailto:example@gmail.com">
                    info@optisence.com
                  </Link>
                  <Link href="tel:+27218913127">+27218913127</Link>
                </section>
                <section>
                  <FacebookFillIcon color="#fff" />
                </section>
              </footer>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
