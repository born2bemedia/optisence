'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export const BurgerMenu = () => {
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
                  Home
                </Link>
                <Divider color="dark" />
                <Link className="p-3" href="/who-we-are">
                  Who We Are
                </Link>
                <Divider color="dark" />
                <button
                  className="flex cursor-pointer items-center justify-between p-3"
                  onClick={() => setShowConsulting(!showConsulting)}
                >
                  Consulting Solutions <ChevronDown color="#fff" />
                </button>
                {showConsulting && (
                  <>
                    <Link
                      className="p-3 text-[rgba(255,255,255,0.6)]"
                      href="/marketing-operations-advisory"
                    >
                      Marketing Operations Advisory
                    </Link>
                    <Link
                      className="p-3 text-[rgba(255,255,255,0.6)]"
                      href="/corporate-strategy-guidance"
                    >
                      Corporate Strategy Guidance
                    </Link>
                  </>
                )}
                <Divider color="dark" />
                <Link className="p-3" href="/industries-we-shape">
                  Industries We Shape
                </Link>
                <Divider color="dark" />
                <Link className="p-3" href="/our-work">
                  Our Work
                </Link>
                <Divider color="dark" />
                <Link className="p-3" href="/careers">
                  Careers
                </Link>
                <Divider color="dark" />
                <Link
                  className="p-3"
                  href="/media-center/5-signs-your-business"
                >
                  Media Center
                </Link>
              </section>
              <Link href="/contact-us" className="mt-6">
                <Button textAlign="center" fullWidth>
                  Contact
                </Button>
              </Link>
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
