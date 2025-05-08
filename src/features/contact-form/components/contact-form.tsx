'use client';

import { type ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { toast } from '@/shared/lib/toast';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';

import { type ContactSchema, contactSchema } from '../lib';
import { sendContact } from '../services';

const ThankYouDialog = dynamic(() =>
  import('./thank-you-dialog').then(mod => mod.ThankYouDialog),
);

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const countryCode = useCountryCode();

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
              label="First Name"
              rounded="full"
              placeholder="Enter your first name"
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
              label="Last Name"
              variant="white"
              rounded="full"
              placeholder="Enter your last name"
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
              label="Email"
              rounded="full"
              placeholder="Enter your email"
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
              label="Phone Number"
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
              label="Company Name"
              rounded="full"
              placeholder="Enter your company name"
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
              label="Company Website"
              rounded="full"
              placeholder="Enter your company website "
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
              label="Budget"
              rounded="full"
              placeholder="Enter your budget"
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
              label="Message"
              rounded="full"
              placeholder="Enter your message"
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
            />
          )}
        />
      </FormRow>
      <Button type="submit" disabled={isSubmitting} className="mr-auto ml-auto">
        {isSubmitting ? 'Submitting...' : 'Submit Request'} <ArrowRightIcon />
      </Button>
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
};

const FormRow = ({ children }: { children: ReactNode }) => (
  <section className="flex gap-8 max-lg:flex-col">{children}</section>
);
