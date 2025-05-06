'use client';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ProgressBar } from '@/shared/ui/components/progress-bar';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { type BasicInfoSchema, basicInfoSchema } from '../lib';
import { useRequestDialogStore } from '../services';

export function BasicInfoForm() {
  const { updateValues, setStep } = useRequestDialogStore();

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
          Get in Touch with Optisence
        </Title>
        <Text color="dark" size="2xl" weight={500}>
          Let’s Collaborate to Achieve <br />
          Your Business Objectives
        </Text>
        <Text>
          At Optisence, we partner with companies like yours to provide tailored
          solutions that drive growth and optimize operations. To get started,
          please share details about your business needs, and we’ll craft a
          strategy to help you succeed.
        </Text>
      </section>
      <Divider />
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <section className="flex flex-col items-center gap-2 text-center">
          <Text color="dark" size="2xl" weight={500}>
            Basic Information
          </Text>
          <Tag>Personal & Company Data</Tag>
        </section>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Full Name"
              hint={error?.message}
              placeholder="Enter the name of the primary contact person"
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
              label="Email Address"
              hint={error?.message}
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
              placeholder="Enter a contact phone number"
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
              label="Company Name (optional)"
              hint={error?.message}
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
              label="Company Website (optional)"
              hint={error?.message}
              placeholder="Enter your company website"
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
            {isSubmitting ? 'Submitting' : 'Continue'} <ArrowRightIcon />
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
