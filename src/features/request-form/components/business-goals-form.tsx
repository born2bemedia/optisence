'use client';

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

const marketing = [
  'Strategic Marketing Planning',
  'Workflow Optimization',
  'Performance Measurement',
  'Marketing Automation Implementation',
  'Customer Journey Mapping',
  'Other',
];

const corporate = [
  'Business Model Innovation',
  'Market Entry and Expansion Strategies',
  'Competitive Analysis',
  'Change Management',
  'Leadership and Governance Consulting',
  'Other',
];

const budget = [
  'Under €1,000',
  '€1,000 - €5,000',
  '€5,000 - €10,000',
  '€10,000 - €20,000',
  '€20,000+',
];

export const BusinessGoalsForm = () => {
  const { updateValues, setStep } = useRequestDialogStore();

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
          Business Needs & Goals
        </Text>
        <Tag>Select the Service You’re Interested In</Tag>
        <Text className="mt-1">
          Please choose the consulting services that you’re most interested in.
          We’ll customize our solutions based on your needs.
        </Text>
      </section>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <section className="flex h-full gap-6 max-sm:flex-col">
          <section className="flex flex-col">
            <Text color="dark" size="xl">
              Marketing Operations Advisory:
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
                      placeholder="Please specify"
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
              Corporate Strategy Guidance:
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
                      placeholder="Please specify"
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
              Budget Allocation
            </Text>
            <Text>
              Please select your project’s budget range. This will help us
              create a plan that aligns with your investment.
            </Text>
          </section>
          <Controller
            name="budget"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Text color="dark">Your Budget Range</Text>
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
                      <Text color="foreground">Select your budget range</Text>
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
              Business Challenges & Goals
            </Text>
            <Text>
              What are the key goals your company is looking to achieve, and
              what challenges are you currently facing? Provide us with details,
              and we’ll craft a solution.
            </Text>
          </section>
          <section className="flex flex-col gap-6">
            <Controller
              name="keyObjectives"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  intent={error?.message ? 'danger' : 'primary'}
                  label="Key Objectives"
                  placeholder="Enter your company’s key objectives"
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
                  label="Challenges or Pain Points"
                  placeholder="Enter your company’s challenges or pain points"
                />
              )}
            />
          </section>
        </section>
        <Divider />
        <section className="flex flex-col gap-12">
          <section className="flex flex-col gap-2">
            <Text color="dark" size="xl" weight={500}>
              Your Target Audience
            </Text>
            <Text>
              Please tell us about the audience you wish to target. This will
              help us develop a more accurate strategy.
            </Text>
          </section>
          <section className="flex flex-col gap-6">
            <Controller
              name="industry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  intent={error?.message ? 'danger' : 'primary'}
                  label="Industry/Sector"
                  placeholder="Enter your company’s industry/sector"
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
                  label="Demographics (e.g., age, location, interests)"
                  placeholder="Enter your company’s demographics"
                />
              )}
            />
          </section>
        </section>
        <Button type="submit" textAlign="center" fullWidth>
          {isSubmitting ? 'Submitting...' : 'Continue'}
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
