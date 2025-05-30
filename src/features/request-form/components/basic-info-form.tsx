'use client';

import { useTranslations } from 'next-intl';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ProgressBar } from '@/shared/ui/components/progress-bar';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { type BasicInfoSchema, createBasicInfoSchema } from '../lib';
import { useRequestDialogStore } from '../services';

export function BasicInfoForm() {
  const t = useTranslations('requestForm.0');
  const te = useTranslations('requestForm.0.errors');
  const tb = useTranslations('requestForm.btn');
  const { updateValues, setStep } = useRequestDialogStore();

  const basicInfoSchema = createBasicInfoSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<BasicInfoSchema>({
    resolver: zodResolver(basicInfoSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      companyName: '',
      companyWebsite: '',
      email: '',
      fullName: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit((data: BasicInfoSchema) => {
    console.log('data', data);
    updateValues(data);
    setStep(2);
    reset();
  });

  return (
    <section className="flex flex-col gap-12">
      <section className="flex flex-col items-center gap-4 text-center">
        <Title size="lg" color="primary">
          {t('title')}
        </Title>
        <Text color="dark" size="2xl" weight={500}>
          {t('subtitle.0')}
          <br />
          {t('subtitle.1')}
        </Text>
        <Text>{t('description')}</Text>
      </section>
      <Divider />
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <section className="flex flex-col items-center gap-2 text-center">
          <Text color="dark" size="2xl" weight={500}>
            {t('basicInfo')}
          </Text>
          <Tag>{t('personalCompanyData')}</Tag>
        </section>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('fields.fullName.label')}
              hint={error?.message}
              placeholder={t('fields.fullName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('fields.email.label')}
              hint={error?.message}
              placeholder={t('fields.email.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('fields.phone.label')}
              hint={error?.message}
              placeholder={t('fields.phone.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
            />
          )}
        />
        <Controller
          name="companyName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('fields.companyName.label')}
              hint={error?.message}
              placeholder={t('fields.companyName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
            />
          )}
        />
        <Controller
          name="companyWebsite"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('fields.companyWebsite.label')}
              hint={error?.message}
              placeholder={t('fields.companyWebsite.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
            />
          )}
        />
        <section className="mt-8 flex flex-col gap-6">
          <Button
            type="submit"
            textAlign="center"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? tb('submitting') : tb('continue')}
            <ArrowRightIcon />
          </Button>
          <section className="flex items-center gap-3">
            <ProgressBar active />
            <ProgressBar />
            <ProgressBar />
          </section>
        </section>
      </form>
    </section>
  );
}
