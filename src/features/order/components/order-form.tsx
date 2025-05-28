'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { type OrderSchema, orderSchema } from '../lib';
import { order } from '../services';

export const OrderForm = ({
  productName,
  productPrice,
  onSuccess,
}: {
  productName: string;
  productPrice?: string;
  onSuccess: () => void;
}) => {
  const t = useTranslations('order');

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      companyName: '',
      companyWebsite: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      await order({ ...data, productName, productPrice });
      reset();
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again later.');
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <FormRow>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('fields.firstName.label')}
                hint={error?.message}
                hintPosition="bottom"
                placeholder={t('fields.firstName.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
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
                hint={error?.message}
                hintPosition="bottom"
                placeholder={t('fields.lastName.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
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
                label={t('fields.email.label')}
                hint={error?.message}
                hintPosition="bottom"
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
                hintPosition="bottom"
                placeholder={t('fields.phone.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
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
                label={t('fields.companyName.label')}
                hint={error?.message}
                hintPosition="bottom"
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
                hintPosition="bottom"
                placeholder={t('fields.companyWebsite.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
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
                label={t('fields.budget.label')}
                hint={error?.message}
                hintPosition="bottom"
                placeholder={t('fields.budget.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('fields.message.label')}
                hint={error?.message}
                hintPosition="bottom"
                placeholder={t('fields.message.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
        </FormRow>
      </section>
      <Button type="submit" textAlign="center" fullWidth>
        {isSubmitting ? t('btn.submitting') : t('btn.submit')}{' '}
        <ArrowRightIcon />
      </Button>
    </form>
  );
};

const FormRow = ({ children }: { children: ReactNode }) => (
  <section className="flex gap-4 max-md:flex-col">{children}</section>
);
