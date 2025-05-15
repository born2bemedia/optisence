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
import { Summary } from './summary';

export const BusinessNeedsArticle = () => {
  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">
            5 Signs Your Business Needs
            <br className="max-sm:hidden" />{' '}
            <span className="text-primary">a New Corporate Strategy</span>
          </Title>
        }
        description="Why Growth Stalls, What to Look For, and How to Lead Forward"
        images={[
          '/images/media-center/business-needs/heading-1.jpg',
          '/images/media-center/business-needs/heading-2.png',
        ]}
      >
        <section className="flex flex-col gap-3">
          <Text>
            In the life of every business, there comes a moment when momentum
            slows — not due to a lack of effort, but because the world around
            you has moved. What once worked starts to feel… misaligned.
            Customers evolve. Markets reshape. Competitors rewire. And you?
            You’re still running, but the finish line is no longer where it used
            to be.
          </Text>
          <Text>
            That moment is your signal — a call to reevaluate your corporate
            strategy, not your team’s hustle.
          </Text>
          <Text>
            At Optisence, we help companies navigate these turning points with
            clarity, intelligence, and confidence. In this article, we’ll break
            down five often-overlooked signs that your business strategy is
            outdated — and why acting on them can mean the difference between
            flatlining and flourishing.
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
            1. Growth Has Flatlined — But Your Teams Are Overperforming Beyond
            Expectations
          </Text>
          <InfoBlock
            title="What to watch for:"
            values={[
              'High activity with little or no ROI',
              'Revenue stuck despite increased marketing spend',
              'Great execution that feels disconnected from real outcomes',
            ]}
            summary={
              <Text>
                <Url value="/" placeholder="Optisence" /> helps businesses
                decode these signals using advanced diagnostics — helping
                leadership shift from tactical noise to strategic clarity.
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Text>
                Let’s be honest: nothing is more frustrating than doing
                everything right… and still not moving the needle.
              </Text>
              <Text>
                Your marketing campaigns are polished. Sales teams are hustling.
                Operations are lean. And yet — revenue’s plateaued. Market
                share? Shrinking. Customer engagement? Tepid.
              </Text>
              <Text>
                This isn’t a performance issue. It’s a direction issue.
              </Text>
              <Text>
                When growth stalls despite high effort, the root cause is often
                a misaligned strategy. The business may be pursuing outdated
                goals, targeting the wrong segments, or relying on historical
                strengths that no longer differentiate.
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
            2. Your Competitive Advantage Has Quietly Disappeared
          </Text>
          <InfoBlock
            title="Ask yourself:"
            values={[
              'What truly sets us apart — today, not five years ago?',
              'Do our customers describe our value the way we do?',
              'Are we leading the conversation or reacting to it?',
            ]}
            summary={
              <Text>
                <Url value="/" placeholder="Optisence" /> helps companies
                reimagine their positioning through data, empathy, and
                relevance. Because staying competitive means staying connected
                to change.
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Image
                className="h-[113px] w-full rounded-4xl object-cover"
                src="/images/media-center/business-needs/1.jpg"
                alt="Article 1"
                width={500}
                height={131}
                unoptimized
              />
              <Text>
                You used to be the name in your space. Now? You’re just another
                option in the comparison chart.
              </Text>
              <Text>
                This doesn’t happen overnight — it creeps in. Slowly, your
                differentiation dissolves into the noise. Legacy strengths fade.
                Challenger brands rewrite the rules.
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
            3. You’re Expanding — But It Feels Disorganized
          </Text>
          <section className="flex items-center gap-12 max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <Text className="flex flex-col gap-3">
              <span>Scaling should feel strategic, not scattered.</span>
              <span>
                When every new product, region, or campaign feels like a
                disconnected initiative — your growth isn’t strategic. It’s
                reactive. Expansion becomes exhausting when it’s not guided by a
                cohesive, forward-looking blueprint.
              </span>
            </Text>
            <Text className="flex flex-col gap-3">
              <span>
                At Optisence, we help businesses transition from reactive
                scaling to orchestrated growth — through market validation,
                portfolio mapping, and clear go-to-market frameworks that evolve
                with your business.
              </span>
              <span>Growth should feel focused. Not frantic.</span>
            </Text>
          </section>
        </ArticleSectionLayout>
        <ArticleSectionLayout>
          <Text
            size="3xl"
            color="dark"
            weight={600}
            className="w-1/2 max-sm:w-full"
          >
            4. Internally, Everyone’s Playing a Different Game
          </Text>
          <InfoBlock
            title="Symptoms of misalignment:"
            values={[
              'Strategy means different things to different departments',
              'Leadership decisions pull in opposite directions',
              'Employees lack clarity on what success really looks like',
            ]}
            summary={
              <Text>
                <Url value="/" placeholder="Optisence" /> leads strategic
                alignment sessions that unify teams, clarify roles, and turn
                company-wide confusion into coordinated action.
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Image
                className="h-[113px] w-full rounded-4xl object-cover"
                src="/images/media-center/business-needs/2.jpg"
                alt="Article 2"
                width={500}
                height={131}
                unoptimized
              />
              <Text>
                When you walk into a leadership meeting and no two executives
                can align on priorities — the problem isn’t people. It’s
                purpose.
              </Text>
              <Text>
                A strong corporate strategy creates shared language, common
                direction, and unified focus. Without it, silos form. Priorities
                conflict. Culture splinters. .
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
            5. You’re Still Making Decisions Based on the Past
          </Text>
          <InfoBlock
            title={
              <>
                At <Url value="/" placeholder="Optisence" />, we help clients
                future-proof their strategy by integrating:
              </>
            }
            titleColor="secondary"
            values={[
              'Predictive analytics',
              'Real-time market insights',
              'Behavioral trends and macroeconomic shifts',
            ]}
            summary={
              <Text>
                We believe in decisions backed by data and sharpened by
                foresight. Because surviving tomorrow means letting go of
                yesterday’s map.
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Image
                className="h-[113px] w-full rounded-4xl object-cover"
                src="/images/media-center/business-needs/3.jpg"
                alt="Article 2"
                width={500}
                height={131}
                unoptimized
              />
              <Text>
                Your strategy is not a museum piece — it must live and evolve.
              </Text>
              <Text>
                Too many companies rely on data, assumptions, or models that are
                no longer relevant. The danger? Blind spots. Missed signals.
                Lagging behind disruptors who are already shaping the future.
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
            Your Strategy Isn’t Just a Document — It’s a Decision System
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <Text className="flex flex-col gap-3">
              <span>
                The most successful companies don’t just have a strategy. They
                live it, breathe it, and use it as a decision engine — across
                leadership, operations, marketing, and culture.
              </span>
              <span>
                If any of these signs sound familiar, it’s not a problem — it’s
                an invitation. An opportunity to evolve. To lead forward.
              </span>
            </Text>
            <Text>
              Optisence partners with ambitious businesses to craft bold,
              data-driven, and execution-ready strategies that scale with you —
              not against you. We don’t deliver reports. We deliver
              transformation.
            </Text>
          </section>
        </ArticleSectionLayout>
        <Summary title="Ready to Rebuild with Purpose?">
          <Text>
            If your strategy no longer fits the business you’re becoming, let’s
            change that.
          </Text>
          <Text>
            Reach out to Optisence today to schedule a corporate strategy
            consultation — and let’s architect the next chapter of your growth.
          </Text>
        </Summary>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
