'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { ThankYouDialog } from '@/features/contact-form/components';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { MinifiedDropdzone } from '@/shared/ui/kit/minified-dropdzone';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { type ApplicationFormSchema, applicationFormSchema } from '../lib';
import { sendApplication } from '../services';

export const ApplicationForm = () => {
  const t = useTranslations('careers.readyToApply.form');

  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ApplicationFormSchema>({
    resolver: zodResolver(applicationFormSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      fullName: '',
      phone: '',
      role: '',
      portfolio: '',
      file: undefined,
      message: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      await sendApplication(data);
      reset();
      setIsOpen(true);
    } catch (error) {
      console.error(error);
      toast.error(
        'Failed to send application. Please review your form and try again later.',
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <section className="flex flex-col gap-6">
        <FormRow>
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('fields.name.label')}
                hint={error?.message}
                placeholder={t('fields.name.placeholder')}
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
        </FormRow>
        <FormRow>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <PhoneField
                {...field}
                label={t('fields.phone.label')}
                hint={error?.message}
                placeholder={t('fields.phone.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('fields.role.label')}
                hint={error?.message}
                placeholder={t('fields.role.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
        </FormRow>
        <FormRow>
          <Controller
            name="portfolio"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('fields.portfolio.label')}
                hint={error?.message}
                placeholder={t('fields.portfolio.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
        </FormRow>
        <FormRow>
          <Controller
            name="file"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <MinifiedDropdzone
                onDrop={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextArea
                {...field}
                label={t('fields.message.label')}
                hint={error?.message}
                placeholder={t('fields.message.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
        </FormRow>
      </section>
      <Button type="submit" disabled={isSubmitting} className="mx-auto">
        {isSubmitting ? t('fields.submit.loading') : t('fields.submit.label')}
        <ArrowRightIcon />
      </Button>
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
};

const FormRow = ({ children }: { children: React.ReactNode }) => (
  <section className="flex gap-8 max-md:flex-col">{children}</section>
);
