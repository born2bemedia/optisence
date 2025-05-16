'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Url } from '@/shared/ui/components/url';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { ArticleContentLayout } from './article-content-layout';
import { ArticleLayout } from './article-layout';
import { ArticleSectionLayout } from './article-section-layout';
import { Heading } from './heading';
import { InfoBlock } from './info-block';

export const DisruptArticle = () => {
  const t = useTranslations('mediaCenter.disruptOrBeDisrupted');

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
          '/images/media-center/disrupt/heading-1.jpg',
          '/images/media-center/disrupt/heading-2.jpg',
        ]}
      >
        <section className="flex flex-col gap-3">
          <Text>{t('0.0')}</Text>
          <Text>{t('0.1')}</Text>
          <Text>{t('0.2')}</Text>
          <Text>
            {t('0.3.0')} <Url value="/" placeholder="Optisence" /> {t('0.3.1')}
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
            {t('1.title')}
          </Text>
          <InfoBlock
            title={t('1.commonInnovationBlockers')}
            values={[
              t('1.values.0'),
              t('1.values.1'),
              t('1.values.2'),
              t('1.values.3'),
              t('1.values.4'),
            ]}
            summary={<Text>{t('1.summary')}</Text>}
          >
            <section className="flex flex-col gap-3">
              <Text>{t('1.0')}</Text>
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
            {t('2.title')}
          </Text>
          <InfoBlock
            title={t('2.thatMeans')}
            values={[
              t('2.values.0'),
              t('2.values.1'),
              t('2.values.2'),
              t('2.values.3'),
            ]}
            summary={
              <Text>
                {t('2.summary.0')} <Url value="/" placeholder="Optisence" />,{' '}
                {t('2.summary.1')}
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Text>{t('2.0.0')}</Text>
              <Text>{t('2.0.1')}</Text>
              <Text>{t('2.0.2')}</Text>
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
            {t('3.title')}
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text>{t('3.0.0')}</Text>
              <Text color="primary">1. {t('3.0.1')}</Text>
              <Text>{t('3.0.2')}</Text>
              <Text>
                <Url value="/" placeholder="Optisence" /> {t('3.0.3')}
              </Text>
              <Text color="primary">2. {t('3.1.0')}</Text>
              <Text>{t('3.1.1')}</Text>
              <Text>{t('3.1.2')}</Text>
            </section>
            <section className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <Text color="primary">3. {t('3.2.0')}</Text>
              <Text>{t('3.2.1')}</Text>
              <Text>
                {t('3.2.0')} <Url value="/" placeholder="Optisence" />,
                {t('3.2.1')}
              </Text>
              <Text color="primary">4. {t('3.3.0')}</Text>
              <Text>{t('3.3.1')}</Text>
              <Text>{t('3.3.2')}</Text>
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
            {t('4.title')}
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <Text className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <span>{t('4.0.0')}</span>
              <span>{t('4.0.1')}</span>
              <span>{t('4.0.2')}</span>
              <span>{t('4.0.3')}</span>
            </Text>
            <Text className="flex w-1/2 flex-col gap-3 max-sm:w-full">
              <span>{t('4.1.0')}</span>
              <span>{t('4.1.1')}</span>
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
                {t('5.title')}
              </Text>
              <Text>{t('5.0.0')}</Text>
              <Text>{t('5.0.1')}</Text>
              <Text>{t('5.0.2')}</Text>
            </section>
            <section className="flex w-1/2 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8 max-sm:w-full max-sm:p-5">
              <Text
                size="3xl"
                color="dark"
                weight={600}
                className="mb-5 max-sm:w-full"
              >
                {t('6.title')}
              </Text>
              <Text>
                {t('6.0.0')} <Url value="/" placeholder="Optisence" />,{' '}
                {t('6.0.1')}
              </Text>
            </section>
          </section>
        </ArticleSectionLayout>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
