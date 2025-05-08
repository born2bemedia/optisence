'use client';

import Image from 'next/image';

import { Url } from '@/shared/ui/components/url';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { ArticleContentLayout } from './article-content-layout';
import { ArticleLayout } from './article-layout';
import { ArticleSectionLayout } from './article-section-layout';
import { Heading } from './heading';
import { InfoBlock } from './info-block';

export const DisruptArticle = () => {
  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">
            <span className="text-primary">Disrupt or Be Disrupted:</span>
            <br className="max-sm:hidden" /> Innovation Strategy for Established
            Enterprises
          </Title>
        }
        description="Why Legacy Companies Must Think Like Startups to Stay Relevant"
        images={[
          '/images/media-center/disrupt/heading-1.jpg',
          '/images/media-center/disrupt/heading-2.jpg',
        ]}
      >
        <section className="flex flex-col gap-3">
          <Text>
            For decades, scale was a moat. Brand equity, market share, global
            reach — these were the signs of an “unshakable” business.
          </Text>
          <Text>
            But today? Disruption doesn’t care how big you are. It only cares
            how fast you adapt.
          </Text>
          <Text>
            From nimble startups rewriting industry rules to AI-driven models
            outpacing human processes, the velocity of change has never been
            greater. And for established enterprises, the choice is clear:
            disrupt — or be disrupted.
          </Text>
          <Text>
            At <Url value="/" placeholder="Optisence" />, we help legacy
            companies build innovation strategies that aren’t just reactive —
            they’re resilient, repeatable, and future-focused. In this article,
            we’ll explore what true innovation looks like inside mature
            organizations — and how you can make it your next competitive edge.
          </Text>
        </section>
      </Heading>
      <ArticleContentLayout>
        <ArticleSectionLayout>
          <Text
            size="3xl"
            color="dark"
            weight={600}
            className="w-1/2 max-sm:w-full"
          >
            Why Innovation Stalls in Mature Companies
          </Text>
          <InfoBlock
            title="Common innovation blockers:"
            values={[
              'Risk aversion baked into the culture',
              'Siloed departments that stifle collaboration',
              'Short-term incentives that punish experimentation',
              'Legacy systems that resist integration',
              'Lack of innovation governance or roadmap',
            ]}
            summary={
              <Text>
                Sound familiar? You’re not alone. At Optisence, we’ve worked
                with many global brands facing this exact challenge — and helped
                them rebuild innovation as a strategic capability, not just a
                creative initiative.
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Text>
                Let’s start with some truth: most large organizations don’t lack
                ideas. They lack systems to turn those ideas into value — at
                scale, with speed, and without killing what works.
              </Text>
              <Image
                className="h-[217px] w-full rounded-4xl object-cover"
                src="/images/media-center/disrupt/1.jpg"
                alt="Article 1"
                width={500}
                height={131}
                unoptimized
              />
            </section>
          </InfoBlock>
        </ArticleSectionLayout>
        <ArticleSectionLayout>
          <Text
            size="3xl"
            color="dark"
            weight={600}
            className="w-1/2 max-sm:w-full"
          >
            Innovation as a Strategy — Not a Sideshow
          </Text>
          <InfoBlock
            title="That means connecting it to:"
            values={[
              'Customer needs — not just new tech',
              'Market shifts — not just internal desires',
              'Revenue models — not just prototypes',
              'Talent and culture — not just tools',
            ]}
            summary={
              <Text>
                At <Url value="/" placeholder="Optisence" />, we embed
                innovation thinking across leadership, product development,
                go-to-market strategies, and operating models — so it’s no
                longer a nice-to-have, but a growth engine.
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Text>
                Too often, innovation is treated like a side project. A “lab” in
                a different office. A hackathon once a year. A slogan slapped
                onto a PowerPoint deck.
              </Text>
              <Text>
                But real innovation isn’t a department. It’s a decision system.
              </Text>
              <Text>
                To truly thrive, innovation must be integrated into your core
                business model, not isolated from it.{' '}
              </Text>
              <Image
                className="h-[120px] w-full rounded-4xl object-cover"
                src="/images/media-center/disrupt/2.jpg"
                alt="Article 2"
                width={500}
                height={131}
                unoptimized
              />
            </section>
          </InfoBlock>
        </ArticleSectionLayout>
        <ArticleSectionLayout>
          <Text
            size="3xl"
            color="dark"
            weight={600}
            className="w-1/2 max-sm:w-full"
          >
            How to Build an Innovation Strategy That Works
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text>
                Here’s how established enterprises can make innovation not just
                possible — but systematic and sustainable:
              </Text>
              <Text color="primary">
                1. Create an Innovation Governance Framework
              </Text>
              <Text>
                Define ownership, decision rights, resource allocation, and
                success metrics.
              </Text>
              <Text>
                <Url value="/" placeholder="Optisence" /> helps organizations
                build this governance architecture — ensuring innovation isn’t
                ad hoc, but accountable.
              </Text>
              <Text color="primary">
                2. Invest in Exploration & Exploitation
              </Text>
              <Text>
                Balance disruptive innovation (new models, products, markets)
                with core optimization.
              </Text>
              <Text>
                We call this the ambidextrous enterprise — and we guide
                leadership teams through the process of managing both without
                conflict.
              </Text>
            </section>
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text color="primary">
                3. Build Innovation into the Business DNA
              </Text>
              <Text>
                Train teams in design thinking, experimentation, and fast
                validation. Align KPIs with learning, not just performance.
              </Text>
              <Text>
                With <Url value="/" placeholder="Optisence" />, enterprises
                shift from execution-only cultures to learning-led growth
                engines.
              </Text>
              <Text color="primary">
                4. Leverage Emerging Tech — with Purpose
              </Text>
              <Text>
                AI, automation, IoT, sustainability tech — all powerful tools.
                But only when aligned with strategic intent.
              </Text>
              <Text>
                We help clients identify where technology amplifies impact — and
                avoid shiny object traps.
              </Text>
            </section>
          </section>
        </ArticleSectionLayout>
        <ArticleSectionLayout>
          <Text
            size="3xl"
            color="dark"
            weight={600}
            className="w-1/2 max-sm:w-full"
          >
            Case in Point: Disruption Happens Fast
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <Text className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <span>
                Blockbuster didn’t lose to Netflix because of marketing.
              </span>
              <span>Kodak didn’t fall because of bad branding.</span>
              <span>
                They lost because their innovation strategy failed to evolve.
              </span>
              <span>Don’t make the same mistake.</span>
            </Text>
            <Text className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <span>
                The market doesn’t wait for anyone to catch up. Today’s
                disruptors move fast, stay customer-obsessed, and innovate
                without the burden of legacy.
              </span>
              <span>
                That’s exactly why Optisence helps established companies reframe
                that legacy — not as a weight, but as a foundation for
                breakthrough.
              </span>
            </Text>
          </section>
        </ArticleSectionLayout>
        <ArticleSectionLayout>
          <section className="flex gap-12 max-sm:flex-col">
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text
                size="3xl"
                color="dark"
                weight={600}
                className="mb-5 max-sm:w-full"
              >
                Ready to Innovate with Intention — Not Panic?
              </Text>
              <Text>Innovation isn’t optional. It’s oxygen.</Text>
              <Text>
                Whether you’re looking to redesign your business model, reinvent
                a product line, or redefine your industry position — Optisence
                brings the frameworks, data, and leadership support you need to
                drive real transformation.
              </Text>
              <Text>
                Because disruption is no longer the threat. It’s the
                opportunity.
              </Text>
            </section>
            <section className="flex w-1/2 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8 max-sm:w-full max-sm:p-5">
              <Text
                size="3xl"
                color="dark"
                weight={600}
                className="mb-5 max-sm:w-full"
              >
                Let’s Build Your Innovation Strategy Together
              </Text>
              <Text>
                Reach out to <Url value="/" placeholder="Optisence" /> today and
                discover how we help established companies lead the future — not
                chase it.
              </Text>
            </section>
          </section>
        </ArticleSectionLayout>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
