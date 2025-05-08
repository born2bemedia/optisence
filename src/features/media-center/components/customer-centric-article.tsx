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
import { ListBlock } from './list-block';
import { StepsBlock } from './steps-block';

export const CustomerCentricArticle = () => {
  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">
            Customer-Centric Strategy: How to Turn Feedback Into Competitive
            Advantage
          </Title>
        }
        images={[
          '/images/media-center/customer-centric/heading-1.jpg',
          '/images/media-center/customer-centric/heading-2.jpg',
        ]}
        simplified
      >
        <section className="flex flex-col gap-3">
          <Text>
            Listening is good. Acting is better. Strategizing is best.
          </Text>
          <Text>
            In a world where customers are more informed, connected, and vocal
            than ever before, the companies that win are no longer the ones with
            the best product — but the ones that listen best, respond fastest,
            and evolve smartest.
          </Text>
          <Text>
            Yet despite this shift, many businesses still treat customer
            feedback as a post-sale activity — something to review quarterly,
            file away, or occasionally act upon.
          </Text>
          <Text>
            At <Url value="/" placeholder="Optisence" />, we take a different
            view: customer insight is one of the most underutilized strategic
            assets in business today. When feedback isn’t just heard but woven
            directly into corporate strategy, it becomes a powerful
            differentiator — and often, a shortcut to competitive advantage.
          </Text>
        </section>
      </Heading>
      <ArticleContentLayout>
        <ListBlock
          title="Customer-Centricity Isn't a Campaign — It's a Company
          Philosophy"
          listTitle="A truly customer-centric strategy requires:"
          listValues={[
            'Systematic collection of feedback across every touchpoint',
            'Cross-functional integration of that insight — not just in marketing, but in product, operations, and leadership',
            'Strategic action based on real patterns, not just anecdotes',
          ]}
          summary={
            <Text>
              At <Url value="/" placeholder="Optisence" />, we help companies
              build frameworks that close the gap between feedback and forward
              motion — translating raw insight into high-impact decision-making.
            </Text>
          }
        >
          <Text>
            Let’s be clear: being customer-centric doesn’t mean always saying
            yes. It means making smart, strategic decisions based on what your
            customers value most — even when that challenges internal
            assumptions.
          </Text>
          <Text>
            Too often, businesses rely on outdated personas, guesswork, or
            executive bias to define customer needs. The result? Misaligned
            strategies, irrelevant messaging, and missed opportunities.
          </Text>
        </ListBlock>
        <ListBlock
          title="The Strategic Value of Listening (When Done Right)"
          listTitle=""
          listValues={[
            'Reveal unmet needs before competitors do',
            'Signal churn risks before they happen',
            'Shape product roadmaps based on demand, not assumption',
            'Validate or challenge key brand messages',
            'Highlight market shifts in real-time',
          ]}
          summary={
            <Text>
              And yet, many organizations either ignore this input, misinterpret
              it, or collect it without clear next steps. Optisence’s consulting
              process transforms this noise into navigation, helping clients
              extract insight that drives innovation, loyalty, and market
              growth.
            </Text>
          }
        >
          <Image
            className="h-[161px] w-full rounded-4xl object-cover"
            src="/images/media-center/customer-centric/1.jpg"
            alt="Article 1"
            width={500}
            height={131}
            unoptimized
          />
          <Text>
            Customer feedback is more than opinion — it’s a strategic data
            stream. When properly mined and analyzed, it can:
          </Text>
        </ListBlock>
        <ArticleSectionLayout>
          <Text
            size="3xl"
            color="dark"
            weight={600}
            className="w-1/2 max-sm:w-full"
          >
            A Competitive Advantage Most Companies Ignore
          </Text>
          <InfoBlock
            title=""
            summary={<></>}
            values={[
              'While competitors chase leads, you could be learning from them.',
              'While others guess, you could be guided by truth.',
              'While some companies fear criticism, you could profit from it.',
            ]}
            additionalText={<></>}
            reverse
          >
            <Text>
              This is the power of customer-centric strategy — and it’s where
              <Url value="/" placeholder="Optisence" /> helps our clients shine.
              By embedding voice-of-customer intelligence into core planning, we
              enable companies to become not just more responsive, but more
              relevant.
            </Text>
          </InfoBlock>
        </ArticleSectionLayout>
        <StepsBlock
          title="Customer-Centricity Isn’t the Trend. It’s the Future."
          description={
            <Text className="flex flex-col gap-3">
              <span>
                To turn feedback into competitive advantage, it must become part
                of your strategic operating system — not just your customer
                service process.
              </span>
              <span>Here’s how we guide clients through the transition:</span>
            </Text>
          }
          values={[
            {
              title: '1. Centralize Customer Data',
              content: (
                <section className="flex flex-col gap-3">
                  <Text>
                    Bring together feedback from surveys, reviews, social media,
                    sales calls, and support logs into a unified view.
                  </Text>
                  <Text>
                    <Url value="/" placeholder="Optisence" /> designs integrated
                    feedback ecosystems to avoid data silos and enable real-time
                    insight.
                  </Text>
                </section>
              ),
            },
            {
              title: '2. Analyze for Strategic Patterns',
              content: (
                <Text>
                  We apply qualitative and quantitative analysis to identify
                  trends, friction points, and white-space opportunities. Not
                  every comment matters — but patterns always do.
                </Text>
              ),
            },
            {
              title: '3. Prioritize Action Through Business Value',
              content: (
                <Text>
                  Which feedback will actually move the needle? We help
                  prioritize initiatives based on revenue impact, customer
                  satisfaction, and market positioning.
                </Text>
              ),
            },
            {
              title: '4. Build Feedback Loops into Strategy Cycles',
              content: (
                <Text>
                  Whether you’re launching new products, entering new markets,
                  or optimizing service delivery — every strategic decision
                  should be informed by customer reality.
                </Text>
              ),
            },
          ]}
          imgUrl="/images/media-center/customer-centric/2.jpg"
        />
        <ArticleSectionLayout>
          <section className="flex gap-12 max-sm:flex-col">
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text
                size="3xl"
                color="dark"
                weight={600}
                className="mb-5 max-sm:w-full"
              >
                Customer-Centricity Isn’t the Trend. It’s the Future.
              </Text>
              <Text>
                If your customer feedback sits in spreadsheets, unread
                dashboards, or passive reports — you’re leaving strategy on the
                table.
              </Text>
              <Text>
                <Url value="/" placeholder="Optisence" /> works with businesses
                ready to lead with insight, design with empathy, and grow with
                precision. Together, we turn listening into leading — and
                feedback into fuel for lasting competitive edge.
              </Text>
            </section>
            <section className="flex w-1/2 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8 max-sm:w-full max-sm:p-5">
              <Text
                size="3xl"
                color="dark"
                weight={600}
                className="mb-5 max-sm:w-full"
              >
                Let’s Make Your Customers Part of Your Strategy
              </Text>
              <Text>
                Connect with <Url value="/" placeholder="Optisence" /> today and
                let’s build a customer-centric strategy that transforms how you
                grow, innovate, and compete.
              </Text>
            </section>
          </section>
        </ArticleSectionLayout>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
