'use client';

import { type ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { toast } from '@/shared/lib/toast';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';

import { type ContactSchema, createContactSchema } from '../lib';
import { sendContact } from '../services';

const ThankYouDialog = dynamic(() =>
  import('./thank-you-dialog').then(mod => mod.ThankYouDialog),
);

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('contact.form');
  const te = useTranslations('contact.form.errors');
  const countryCode = useCountryCode();

  const contactSchema = createContactSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
    clearErrors,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: '',
      companyName: '',
      companyWebsite: '',
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ContactSchema) => {
    try {
      await sendContact(data);
      reset();
      setIsOpen(true);
      clearErrors();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message');
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 rounded-4xl bg-[#F5F5F5] px-[150px] py-[52px] max-lg:px-3 max-lg:py-10"
    >
      <FormRow>
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              variant="white"
              label={t('fields.firstName.label')}
              rounded="full"
              placeholder={t('fields.firstName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('fields.lastName.label')}
              variant="white"
              rounded="full"
              placeholder={t('fields.lastName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              variant="white"
              label={t('fields.email.label')}
              rounded="full"
              placeholder={t('fields.email.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <PhoneField
              {...field}
              label={t('fields.phone.label')}
              country={countryCode}
              hint={error?.message}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="companyName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              variant="white"
              label={t('fields.companyName.label')}
              rounded="full"
              placeholder={t('fields.companyName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
        <Controller
          name="companyWebsite"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              variant="white"
              label={t('fields.companyWebsite.label')}
              rounded="full"
              placeholder={t('fields.companyWebsite.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="budget"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              variant="white"
              label={t('fields.budget.label')}
              rounded="full"
              placeholder={t('fields.budget.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              variant="white"
              label={t('fields.message.label')}
              rounded="full"
              placeholder={t('fields.message.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
      </FormRow>
      <Button type="submit" disabled={isSubmitting} className="mr-auto ml-auto">
        {isSubmitting ? t('submitting') : t('submit')} <ArrowRightIcon />
      </Button>
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
};

const FormRow = ({ children }: { children: ReactNode }) => (
  <section className="flex gap-8 max-lg:flex-col">{children}</section>
);
