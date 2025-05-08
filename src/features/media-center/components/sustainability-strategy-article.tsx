'use client';

import Image from 'next/image';
import Link from 'next/link';

import { List } from '@/shared/ui/components/list';
import { Url } from '@/shared/ui/components/url';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { ArticleContentLayout } from './article-content-layout';
import { ArticleLayout } from './article-layout';
import { ArticleSectionLayout } from './article-section-layout';
import { Heading } from './heading';
import { InfoBlock } from './info-block';
import { Summary } from './summary';

export const SustainabilityStrategyArticle = () => {
  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">
            <span className="text-primary">Sustainability as Strategy:</span>
            <br className="max-sm:hidden" /> Building Purpose-Driven Businesses
          </Title>
        }
        description="Why the Future Belongs to Companies That Think Beyond Profit"
        images={[
          '/images/media-center/sustainability-as-strategy/heading-1.jpg',
          '/images/media-center/sustainability-as-strategy/heading-2.jpg',
        ]}
      >
        <section className="flex flex-col gap-3">
          <Text>
            Once, sustainability was seen as a moral choice. Now, it’s a
            strategic imperative.
          </Text>
          <Text>
            Today’s most resilient and respected companies are those that embed
            sustainability into their business model, decision-making, and brand
            DNA — not just their CSR reports. Consumers demand it. Investors
            reward it. Talent expects it. And the planet, frankly, needs it.
          </Text>
          <Text>
            At Optisence, we help businesses shift sustainability from a
            checkbox to a competitive advantage — from a side initiative to a
            core growth lever. This article explores how organizations can
            strategically embed sustainability to build brands that matter,
            scale with integrity, and create impact that lasts.
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
            Why Sustainability Has Become Strategic — Not Just Ethical
          </Text>
          <InfoBlock
            title="Sustainability now impacts:"
            values={[
              'Risk management: Supply chain instability, climate exposure, and reputational damage',
              'Operational efficiency: Energy use, resource optimization, circular design',
              'Market differentiation: Consumers prefer brands with purpose — and they’re vocal about it',
              'Investor perception: ESG performance directly influences funding and valuation',
            ]}
            summary={
              <Text>
                In other words: ignoring sustainability isn’t neutral — it’s a
                liability.
              </Text>
            }
            highlight
          >
            <section className="flex flex-col gap-3">
              <Text>
                We’re in the midst of a global recalibration. Environmental
                disruption, rising stakeholder expectations, regulatory
                pressure, and shifting investor priorities are rewriting what
                “success” looks like.
              </Text>
              <Text>
                The result? Businesses are being judged not just on what they
                deliver, but how they operate.
              </Text>
              <Image
                className="h-[142px] w-full rounded-4xl object-cover"
                src="/images/media-center/sustainability-as-strategy/1.jpg"
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
            Sustainable Businesses Perform Better
          </Text>
          <section className="flex items-start gap-12 max-sm:flex-col max-sm:gap-3">
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text>This isn’t just an ethical win. It’s a financial one.</Text>
              <List
                values={[
                  'Study after study shows that companies with strong sustainability strategies:',
                  'Achieve higher long-term profitability',
                  'Outperform peers in brand loyalty and customer retention',
                  'Are better prepared to navigate volatility and crisis',
                  'Attract higher-quality talent and leadership',
                  'Increase enterprise value over time',
                ]}
                noHighlight
              />
            </section>
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text>
                <Url value="/" placeholder="Optisence" /> works with clients to
                harness these advantages by designing sustainability strategies
                that are not only responsible — but commercially intelligent. We
                focus on measurable ROI, stakeholder alignment, and long-term
                resilience.
              </Text>
              <Text>
                Because doing good and doing well are no longer separate paths.
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
            From Sustainability as Tactic to Sustainability as Strategy
          </Text>
          <InfoBlock
            title="Optisence helps companies build sustainability into:"
            values={[
              'Core value propositions: Why customers choose you, not just what you sell',
              'Product and service design: Materials, lifecycles, innovation',
              'Supply chain and sourcing: Ethics, transparency, risk mitigation',
              'Employee engagement: Purpose-driven culture and internal alignment',
              'Brand positioning: Authentic narratives, not greenwashed messaging',
              'Growth strategy: New markets, partnerships, and ESG-driven innovation',
            ]}
            summary={
              <Text>
                In short: it’s not about what you say — it’s about how you
                operate, decide, and lead.
              </Text>
            }
            highlight
          >
            <section className="flex flex-col gap-3">
              <Image
                className="h-[156px] w-full rounded-4xl object-cover"
                src="/images/media-center/sustainability-as-strategy/2.jpg"
                alt="Article 2"
                width={500}
                height={131}
                unoptimized
              />
              <Text>
                Too often, companies treat sustainability as a marketing slogan
                or compliance requirement. A report. A recycling program. A
                “green” tagline. These efforts may check boxes — but they rarely
                move markets.
              </Text>
              <Text>
                Real transformation happens when sustainability is embedded into
                strategic planning, across every part of the business model.
              </Text>
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
            The Optisence Approach: Strategic, Measurable, Actionable
          </Text>
          <InfoBlock
            title="Our consulting process integrates:"
            values={[
              'ESG readiness assessments',
              'Sustainability risk and opportunity mapping',
              'Long-term impact modeling',
              'Carbon footprint and circularity planning',
              'Governance and reporting structure design',
            ]}
            summary={
              <Text>
                We believe in decisions backed by data and sharpened by
                foresight. Because surviving tomorrow means letting go of
                yesterday’s map.
              </Text>
            }
            additionalText={
              <Text>
                At{' '}
                <Link href="/" className="underline">
                  Optisence
                </Link>
                , we don’t build sustainability strategies that sit on shelves.
                We build frameworks that shift culture, guide operations, and
                drive stakeholder trust.
              </Text>
            }
            reverse
          >
            <section className="flex flex-col gap-3">
              <Text>
                But most of all, we help your sustainability strategy align with
                your corporate strategy — not compete with it.
              </Text>
              <Text>
                Because your purpose and your performance should never be in
                conflict.
              </Text>
              <Image
                className="h-[278px] w-full rounded-4xl object-cover"
                src="/images/media-center/sustainability-as-strategy/3.jpg"
                alt="Article 3"
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
            Purpose is the Future of Profit
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <Text className="flex flex-col gap-3">
              <span>
                Today’s leading companies are defined not just by their profits
                — but by their principles.
              </span>
              <span>
                Customers are no longer passive. Employees are no longer silent.
                Investors are no longer patient with opacity. Sustainability is
                no longer optional.
              </span>
            </Text>
            <Text>
              <Url value="/" placeholder="Optisence" /> helps forward-thinking
              businesses turn sustainability into an engine for value creation —
              unlocking new markets, building resilient operations, and standing
              for something that matters.
            </Text>
          </section>
        </ArticleSectionLayout>
        <Summary title="Is Your Business Future-Ready?">
          <Text className="flex w-1/2 flex-col gap-3 max-sm:w-full">
            <span>
              The next generation of market leaders will be purpose-led,
              strategy-driven, and impact-focused. If your current business
              model doesn’t reflect that — now is the time to evolve.
            </span>
            <span>
              Get in touch with Optisence today and let’s build a sustainability
              strategy that delivers more than compliance — it delivers growth,
              relevance, and legacy.
            </span>
          </Text>
          <Text className="w-1/2 max-sm:w-full">
            Would you like this version adapted into a downloadable whitepaper
            or lead magnet?
          </Text>
        </Summary>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
