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
import { ListBlock } from './list-block';
import { StepsBlock } from './steps-block';

export const CustomerCentricArticle = () => {
  const t = useTranslations('mediaCenter.customerCentricStrategy');

  return (
    <ArticleLayout>
      <Heading
        title={
          <Title className="text-[48px] leading-[120%]">{t('title')}</Title>
        }
        images={[
          '/images/media-center/customer-centric/heading-1.jpg',
          '/images/media-center/customer-centric/heading-2.jpg',
        ]}
        simplified
      >
        <section className="flex flex-col gap-3">
          <Text>{t('0.0')}</Text>
          <Text>{t('0.1')}</Text>
          <Text>{t('0.2')}</Text>
          <Text>
            {t('0.3.0')} <Url value="/" placeholder="Optisence" />, {t('0.3.1')}
          </Text>
        </section>
      </Heading>
      <ArticleContentLayout>
        <ListBlock
          title={t('1.title')}
          listTitle={t('1.customerCentric')}
          listValues={[t('1.values.0'), t('1.values.1'), t('1.values.2')]}
          summary={
            <Text>
              {t('1.summary.0')} <Url value="/" placeholder="Optisence" />,
              {t('1.summary.1')}
            </Text>
          }
        >
          <Text>{t('1.0.0')}</Text>
          <Text>{t('1.0.1')}</Text>
        </ListBlock>
        <ListBlock
          title={t('2.title')}
          listTitle=""
          listValues={[
            t('2.values.0'),
            t('2.values.1'),
            t('2.values.2'),
            t('2.values.3'),
            t('2.values.4'),
          ]}
          summary={<Text>{t('2.summary')}</Text>}
        >
          <Image
            className="h-[161px] w-full rounded-4xl object-cover"
            src="/images/media-center/customer-centric/1.jpg"
            alt="Article 1"
            width={500}
            height={131}
            unoptimized
          />
          <Text>{t('2.0')}</Text>
        </ListBlock>
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
            title=""
            summary={<></>}
            values={[t('3.values.0'), t('3.values.1'), t('3.values.2')]}
            additionalText={<></>}
            reverse
          >
            <Text>
              {t('3.0.0')} <Url value="/" placeholder="Optisence" />,{' '}
              {t('3.0.1')}
            </Text>
          </InfoBlock>
        </ArticleSectionLayout>
        <StepsBlock
          title={t('4.title')}
          description={
            <Text className="flex flex-col gap-3">
              <span>{t('4.description.0')}</span>
              <span>{t('4.description.1')}</span>
            </Text>
          }
          values={[
            {
              title: t('4.0.0'),
              content: (
                <section className="flex flex-col gap-3">
                  <Text>{t('4.0.1')}</Text>
                  <Text>
                    <Url value="/" placeholder="Optisence" /> {t('4.0.2')}
                  </Text>
                </section>
              ),
            },
            {
              title: t('4.1.0'),
              content: <Text>{t('4.1.1')}</Text>,
            },
            {
              title: t('4.2.0'),
              content: <Text>{t('4.2.1')}</Text>,
            },
            {
              title: t('4.3.0'),
              content: <Text>{t('4.3.1')}</Text>,
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
                {t('summary.title')}
              </Text>
              <Text>{t('summary.0.0')}</Text>
              <Text>
                <Url value="/" placeholder="Optisence" /> {t('summary.0.1')}
              </Text>
            </section>
            <section className="flex w-1/2 flex-col gap-3 rounded-4xl bg-[#F5F5F5] p-8 max-sm:w-full max-sm:p-5">
              <Text
                size="3xl"
                color="dark"
                weight={600}
                className="mb-5 max-sm:w-full"
              >
                {t('summary.1.0')}
              </Text>
              <Text>
                {t('summary.1.1.0')} <Url value="/" placeholder="Optisence" />{' '}
                {t('summary.1.1.1')}
              </Text>
            </section>
          </section>
        </ArticleSectionLayout>
      </ArticleContentLayout>
    </ArticleLayout>
  );
};
