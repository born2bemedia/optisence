'use client';

import type { ReactNode } from 'react';
import { toast } from 'sonner';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';

import { type OrderSchema, orderSchema } from '../lib';
import { order } from '../services';

export const OrderForm = ({
  productName,
  onSuccess,
}: {
  productName: string;
  onSuccess: () => void;
}) => {
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
      await order({ ...data, productName });
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
                label="First Name"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter your first name"
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
                label="Last Name"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter your last name"
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
                label="Email Address"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter a contact email address"
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
                label="Phone Number"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter a contact phone number"
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
                label="Company Name"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter your company name"
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
                label="Company Website"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter your company website"
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
                label="Budget"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Enter your budget"
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
                label="Message:"
                hint={error?.message}
                hintPosition="bottom"
                placeholder="Type here..."
                intent={error?.message ? 'danger' : 'primary'}
              />
            )}
          />
        </FormRow>
      </section>
      <Button type="submit" textAlign="center" fullWidth>
        {isSubmitting ? 'Submitting...' : 'Submit'} <ArrowRightIcon />
      </Button>
    </form>
  );
};

const FormRow = ({ children }: { children: ReactNode }) => (
  <section className="flex gap-4 max-md:flex-col">{children}</section>
);
