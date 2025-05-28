'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('mediaCenter.sustainabilityStrategy');

  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">
            <span className="text-primary">{t('title.0')}</span>
            <br className="max-sm:hidden" /> {t('title.1')}
          </Title>
        }
        description={t('description')}
        images={[
          '/images/media-center/sustainability-as-strategy/heading-1.jpg',
          '/images/media-center/sustainability-as-strategy/heading-2.jpg',
        ]}
      >
        <section className="flex flex-col gap-3">
          <Text>{t('0.0')}</Text>
          <Text>{t('0.1')}</Text>
          <Text>{t('0.2')}</Text>
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
            {t('1.title')}
          </Text>
          <InfoBlock
            title={t('1.sustainabilityNowImpacts')}
            values={[
              t('1.values.0'),
              t('1.values.1'),
              t('1.values.2'),
              t('1.values.3'),
            ]}
            summary={<Text>{t('1.summary')}</Text>}
            highlight
          >
            <section className="flex flex-col gap-3">
              <Text>{t('1.0.0')}</Text>
              <Text>{t('1.0.1')}</Text>
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
            {t('2.title')}
          </Text>
          <section className="flex items-start gap-12 max-sm:flex-col max-sm:gap-3">
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text>{t('2.description')}</Text>
              <List
                values={[
                  t('2.values.0'),
                  t('2.values.1'),
                  t('2.values.2'),
                  t('2.values.3'),
                  t('2.values.4'),
                  t('2.values.5'),
                ]}
                noHighlight
              />
            </section>
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text>
                <Url value="/" placeholder="Optisence" /> {t('2.0.0')}
              </Text>
              <Text>{t('2.0.1')}</Text>
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
            {t('3.title')}
          </Text>
          <InfoBlock
            title={t('3.optisenceHelps')}
            values={[
              t('3.values.0'),
              t('3.values.1'),
              t('3.values.2'),
              t('3.values.3'),
              t('3.values.4'),
              t('3.values.5'),
            ]}
            summary={<Text>{t('3.summary')}</Text>}
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
              <Text>{t('3.0.0')}</Text>
              <Text>{t('3.0.1')}</Text>
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
                {t('4.additionalText.0')}{' '}
                <Link href="/" className="underline">
                  Optisence
                </Link>
                , {t('4.additionalText.1')}
              </Text>
            }
            reverse
          >
            <section className="flex flex-col gap-3">
              <Text>{t('4.0.0')}</Text>
              <Text>{t('4.0.1')}</Text>
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
            {t('5.title')}
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <Text className="flex flex-col gap-3">
              <span>{t('5.0.0')}</span>
              <span>{t('5.0.1')}</span>
            </Text>
            <Text>
              <Url value="/" placeholder="Optisence" /> {t('5.0.2')}
            </Text>
          </section>
        </ArticleSectionLayout>
        <Summary title={t('summary.title')}>
          <Text className="flex w-full flex-col gap-3 max-sm:w-full">
            <span>{t('summary.0.0')}</span>
            <span>{t('summary.0.1')}</span>
          </Text>
        </Summary>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
