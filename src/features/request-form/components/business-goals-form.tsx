'use client';

import { useTranslations } from 'next-intl';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ProgressBar } from '@/shared/ui/components/progress-bar';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Divider } from '@/shared/ui/kit/divider';
import {
  Select,
  SelectItem,
  SelectMenu,
  SelectTrigger,
} from '@/shared/ui/kit/select';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';

import { type BusinessGoalsSchema, businessGoalsSchema } from '../lib';
import { useRequestDialogStore } from '../services';

// const marketing = [
//   'Strategic Marketing Planning',
//   'Workflow Optimization',
//   'Performance Measurement',
//   'Marketing Automation Implementation',
//   'Customer Journey Mapping',
//   'Other',
// ];

// const corporate = [
//   'Business Model Innovation',
//   'Market Entry and Expansion Strategies',
//   'Competitive Analysis',
//   'Change Management',
//   'Leadership and Governance Consulting',
//   'Other',
// ];

const budget = [
  'Under €1,000',
  '€1,000 - €5,000',
  '€5,000 - €10,000',
  '€10,000 - €20,000',
  '€20,000+',
];

export const BusinessGoalsForm = () => {
  const t = useTranslations('requestForm.1');
  const tb = useTranslations('requestForm.btn');
  const { updateValues, setStep } = useRequestDialogStore();

  const marketing = [
    t('marketing.0'),
    t('marketing.1'),
    t('marketing.2'),
    t('marketing.3'),
    t('marketing.4'),
    t('marketing.5'),
  ];

  const corporate = [
    t('corporate.0'),
    t('corporate.1'),
    t('corporate.2'),
    t('corporate.3'),
    t('corporate.4'),
    t('corporate.5'),
  ];

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<BusinessGoalsSchema>({
    resolver: zodResolver(businessGoalsSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      budget: '',
      marketingAdvisory: [],
      corporateGuidance: [],
      keyObjectives: '',
      points: '',
      industry: '',
      demographics: '',
    },
  });

  const onSubmit = handleSubmit((data: BusinessGoalsSchema) => {
    updateValues(data);
    setStep(3);
    reset();
  });

  return (
    <section className="flex flex-col gap-12">
      <section className="flex flex-col items-center gap-2 text-center">
        <Text color="dark" size="2xl" weight={500}>
          {t('title')}
        </Text>
        <Tag>{t('subtitle')}</Tag>
        <Text className="mt-1">{t('description')}</Text>
      </section>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <section className="flex h-full gap-6 max-sm:flex-col">
          <section className="flex flex-col">
            <Text color="dark" size="xl">
              {t('marketingOperations')}
            </Text>
            <Controller
              name="marketingAdvisory"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="mt-4 flex flex-col">
                  {error?.message && (
                    <Text color="danger" italic>
                      {error.message}
                    </Text>
                  )}
                  {marketing.map(item => (
                    <div key={item} className="py-2">
                      <Checkbox
                        id={item}
                        label={item}
                        checked={field.value.includes(item)}
                        onCheckedChange={() =>
                          field.onChange(
                            field.value.includes(item)
                              ? field.value.filter(i => i !== item)
                              : [...field.value, item],
                          )
                        }
                      />
                    </div>
                  ))}
                  {field.value.includes('Other') && (
                    <TextField
                      placeholder={t('pleaseSpecify')}
                      value={
                        field.value
                          .find(i => i.startsWith('Specified:'))
                          ?.replace('Specified:', '') || ''
                      }
                      onChange={e =>
                        field.onChange([
                          ...field.value.filter(
                            i => !i.startsWith('Specified:'),
                          ),
                          `Specified:${e.target.value}`,
                        ])
                      }
                    />
                  )}
                </div>
              )}
            />
          </section>
          <span className="w-[1px] bg-[#DFDFDF] max-sm:h-[1px] max-sm:w-full" />
          <section className="flex flex-col">
            <Text color="dark" size="xl">
              {t('corporateStrategy')}
            </Text>
            <Controller
              name="corporateGuidance"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="mt-4 flex flex-col">
                  {error?.message && (
                    <Text color="danger" italic>
                      {error.message}
                    </Text>
                  )}
                  {corporate.map(item => (
                    <div key={item} className="py-2">
                      <Checkbox
                        id={item}
                        label={item}
                        checked={field.value.includes(item)}
                        onCheckedChange={() =>
                          field.onChange(
                            field.value.includes(item)
                              ? field.value.filter(i => i !== item)
                              : [...field.value, item],
                          )
                        }
                      />
                    </div>
                  ))}
                  {field.value.includes('Other') && (
                    <TextField
                      placeholder={t('pleaseSpecify')}
                      value={
                        field.value
                          .find(i => i.startsWith('Specified:'))
                          ?.replace('Specified:', '') || ''
                      }
                      onChange={e =>
                        field.onChange([
                          ...field.value.filter(
                            i => !i.startsWith('Specified:'),
                          ),
                          `Specified:${e.target.value}`,
                        ])
                      }
                    />
                  )}
                </div>
              )}
            />
          </section>
        </section>
        <Divider />
        <section className="flex flex-col gap-12">
          <section className="flex flex-col gap-2">
            <Text color="dark" size="xl" weight={500}>
              {t('budgetAllocation')}
            </Text>
            <Text>{t('pleaseSelectRange')}</Text>
          </section>
          <Controller
            name="budget"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Text color="dark">{t('fields.budget.label')}</Text>
                  {error?.message && (
                    <Text color="danger" italic>
                      {error.message}
                    </Text>
                  )}
                </div>
                <Select>
                  <SelectTrigger>
                    {field.value ? (
                      field.value
                    ) : (
                      <Text color="foreground">
                        {t('fields.budget.placeholder')}
                      </Text>
                    )}
                  </SelectTrigger>
                  <SelectMenu>
                    {budget.map(item => (
                      <SelectItem
                        key={item}
                        onClick={() => field.onChange(item)}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectMenu>
                </Select>
              </section>
            )}
          />
        </section>
        <Divider />
        <section className="flex flex-col gap-12">
          <section className="flex flex-col gap-2">
            <Text color="dark" size="xl" weight={500}>
              {t('businessChallengesGoals')}
            </Text>
            <Text>{t('goalsDetails')}</Text>
          </section>
          <section className="flex flex-col gap-6">
            <Controller
              name="keyObjectives"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  intent={error?.message ? 'danger' : 'primary'}
                  label={t('fields.keyObjectives.label')}
                  placeholder={t('fields.keyObjectives.placeholder')}
                />
              )}
            />
            <Controller
              name="points"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  intent={error?.message ? 'danger' : 'primary'}
                  label={t('fields.points.label')}
                  placeholder={t('fields.points.placeholder')}
                />
              )}
            />
          </section>
        </section>
        <Divider />
        <section className="flex flex-col gap-12">
          <section className="flex flex-col gap-2">
            <Text color="dark" size="xl" weight={500}>
              {t('yourTargetAudience')}
            </Text>
            <Text>{t('tellUsAboutAudience')}</Text>
          </section>
          <section className="flex flex-col gap-6">
            <Controller
              name="industry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  intent={error?.message ? 'danger' : 'primary'}
                  label={t('fields.industry.label')}
                  placeholder={t('fields.industry.placeholder')}
                />
              )}
            />
            <Controller
              name="demographics"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  intent={error?.message ? 'danger' : 'primary'}
                  label={t('fields.demographics.label')}
                  placeholder={t('fields.demographics.placeholder')}
                />
              )}
            />
          </section>
        </section>
        <Button type="submit" textAlign="center" fullWidth>
          {isSubmitting ? tb('submitting') : tb('continue')}
          <ArrowRightIcon />
        </Button>
        <section className="flex items-center gap-3">
          <ProgressBar active />
          <ProgressBar active />
          <ProgressBar />
        </section>
      </form>
    </section>
  );
};
