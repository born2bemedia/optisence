'use client';

import Link from 'next/link';

import {
  FacebookFillIcon,
  InstagramFillIcon,
  XFillIcon,
} from '@/shared/ui/icons/socials';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

export function Footer() {
  return (
    <footer className="flex flex-col gap-12 border-t border-[#F2F2F2] py-[72px] max-md:py-8">
      <section className="flex justify-between gap-16 px-[100px] max-lg:flex-col max-md:px-8">
        <div className="flex flex-col gap-8 max-lg:items-center max-lg:text-center">
          <section>
            <Text color="primary" size="2xl">
              Optisence
            </Text>
            <Text className="w-[300px] max-sm:w-full">
              Your online trading academy for independent learners. Study with
              structured video lessons, follow your pace, and check progress
              with quizzes.
            </Text>
          </section>
          <section className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 max-lg:justify-center">
              <XFillIcon />
              <InstagramFillIcon />
              <FacebookFillIcon />
            </div>
            <div className="flex items-center gap-2.5">
              <Link href="mailto:info@optisence.com">
                <Text color="dark" hover>
                  info@optisence.com
                </Text>
              </Link>
              <Link href="tel:+1 000 000 000">
                <Text color="dark">+1 000 000 000</Text>
              </Link>
            </div>
          </section>
          <ul className="flex flex-col gap-3">
            <li>
              Registered Address: <br />
              134 Bree Street, Cape Town City Centre, Cape Town, Western Cape,
              8000
            </li>
            <li>
              Office Address: <br />
              Office 706, 7th Floor, 134 Bree Street, Cape Town City Centre,
              Cape Town, Western Cape, 8000, South Africa
            </li>
            <li>Registered Number: 334070</li>
            <li>Krouder Pty Ltd.</li>
          </ul>
        </div>
        <div className="flex gap-6 max-md:grid max-md:grid-cols-2">
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              Consulting Solutions
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Text hover>Marketing Operations Advisory</Text>
              </li>
              <li>
                <Text hover>Corporate Strategy Guidance</Text>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              Company
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Text hover>Who We Are</Text>
              </li>
              <li>
                <Text hover>Industries We Shape</Text>
              </li>
              <li>
                <Text hover>Careers</Text>
              </li>
              <li>
                <Text hover>Media Center</Text>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              Start With Optisence
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Text hover>Get a Consultation</Text>
              </li>
              <li>
                <Text hover>Our Work</Text>
              </li>
              <li>
                <Text hover>Contact</Text>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <Text color="dark" weight={500}>
              Policies
            </Text>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/terms-and-conditions">
                  <Text hover>Terms and Conditions</Text>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <Text hover>Privacy Policy</Text>
                </Link>
              </li>
              <li>
                <Link href="/refund-policy">
                  <Text hover>Refund Policy</Text>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <Text hover>Cookie Policy</Text>
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
        © {new Date().getFullYear()} Optisence. All Legal Rights Reserved.
      </section>
    </footer>
  );
}
