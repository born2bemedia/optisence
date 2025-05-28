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
import { Summary } from './summary';

export const BusinessNeedsArticle = () => {
  const t = useTranslations('mediaCenter.fiveSignsYourBusiness');

  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">
            {t('title.0')}
            <br className="max-sm:hidden" />{' '}
            <span className="text-primary">{t('title.1')}</span>
          </Title>
        }
        description={t('description')}
        images={[
          '/images/media-center/business-needs/heading-1.jpg',
          '/images/media-center/business-needs/heading-2.png',
        ]}
      >
        <section className="flex flex-col gap-3">
          <Text>{t('0.0')}</Text>
          <Text>{t('0.1')}</Text>
          <Text>{t('0.2')}</Text>
          <Text>{t('0.3')}</Text>
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
            title={t('1.whatToWatchFor')}
            values={[t('1.values.0'), t('1.values.1'), t('1.values.2')]}
            summary={
              <Text>
                <Url value="/" placeholder="Optisence" /> {t('1.summary')}
              </Text>
            }
          >
            <section className="flex flex-col gap-3">
              <Text>{t('1.0.0')}</Text>
              <Text>{t('1.0.1')}</Text>
              <Text>{t('1.0.2')}</Text>
              <Text>{t('1.0.3')}</Text>
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
            title={t('2.askYourself')}
            values={[t('2.values.0'), t('2.values.1'), t('2.values.2')]}
            summary={
              <Text>
                <Url value="/" placeholder="Optisence" /> {t('2.summary')}
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
              <Text>{t('2.0.0')}</Text>
              <Text>{t('2.0.1')}</Text>
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
          <section className="flex items-center gap-12 max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <Text className="flex flex-col gap-3">
              <span>{t('3.0.0')}</span>
              <span>{t('3.0.1')}</span>
            </Text>
            <Text className="flex flex-col gap-3">
              <span>{t('3.1.0')}</span>
              <span>{t('3.1.1')}</span>
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
            {t('4.title')}
          </Text>
          <InfoBlock
            title={t('4.symptomsOfMisalignment')}
            values={[t('4.values.0'), t('4.values.1'), t('4.values.2')]}
            summary={
              <Text>
                <Url value="/" placeholder="Optisence" /> {t('4.summary')}
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
              <Text>{t('4.0.0')}</Text>
              <Text>{t('4.0.1')}</Text>
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
          <InfoBlock
            title={
              <>
                {t('5.at')} <Url value="/" placeholder="Optisence" />,{' '}
                {t('5.weHelp')}
              </>
            }
            titleColor="secondary"
            values={[t('5.values.0'), t('5.values.1'), t('5.values.2')]}
            summary={<Text>{t('5.summary')}</Text>}
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
              <Text>{t('5.0.0')}</Text>
              <Text>{t('5.0.1')}</Text>
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
            {t('6.title')}
          </Text>
          <section className="flex gap-12 max-sm:flex-col max-sm:gap-3">
            <Text className="flex flex-col gap-3">
              <span>{t('6.0.0')}</span>
              <span>{t('6.0.1')}</span>
            </Text>
            <Text>{t('6.0.2')}</Text>
          </section>
        </ArticleSectionLayout>
        <Summary title={t('summary.title')}>
          <Text>{t('summary.0.0')}</Text>
          <Text>{t('summary.0.1')}</Text>
        </Summary>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
