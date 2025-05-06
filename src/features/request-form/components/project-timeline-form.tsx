'use client';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { toast } from '@/shared/lib/toast';
import { ProgressBar } from '@/shared/ui/components/progress-bar';
import { ArrowRightIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Divider } from '@/shared/ui/kit/divider';
import { Dropdzone } from '@/shared/ui/kit/dropzone';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { type ProjectTimelineSchema, projectTimelineSchema } from '../lib';
import { sendRequestForm, useRequestDialogStore } from '../services';

const timeline = [
  'Within 1 Month',
  '1-3 Months',
  '3-6 Months',
  'Flexible Timeline',
];

const contactMethod = ['Email', 'Phone', 'Video Call'];

export const ProjectTimelineForm = () => {
  const { values, updateValues, setSent } = useRequestDialogStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ProjectTimelineSchema>({
    resolver: zodResolver(projectTimelineSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      projectTimeline: '',
      contactMethod: '',
      file: undefined,
    },
  });

  const onSubmit = handleSubmit(async (data: ProjectTimelineSchema) => {
    updateValues(data);

    try {
      await sendRequestForm(values);
      reset();
      setSent(true);
    } catch (e) {
      console.error('Error sending request form:', e);
      toast.error('Failed to send request form. Please try again later.');
    }
  });

  return (
    <section className="flex flex-col gap-12">
      <Title color="primary" size="lg">
        Project Timeline & Next Steps
      </Title>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <section className="flex h-full gap-6 max-sm:flex-col">
          <section className="flex flex-1/3 flex-col">
            <Text color="dark" size="xl">
              Project Timeline
            </Text>
            <Controller
              name="projectTimeline"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="mt-4 flex flex-1 flex-col">
                  {error?.message && (
                    <Text color="danger" italic>
                      {error.message}
                    </Text>
                  )}
                  {timeline.map(item => (
                    <div key={item} className="py-2">
                      <Checkbox
                        id={item}
                        label={item}
                        checked={field.value.includes(item)}
                        onCheckedChange={() => field.onChange(item)}
                      />
                    </div>
                  ))}
                </div>
              )}
            />
          </section>
          <span className="w-[1px] bg-[#DFDFDF] max-sm:h-[1px] max-sm:w-full" />
          <section className="flex flex-1/3 flex-col">
            <Text color="dark" size="xl">
              Preferred Method of Contact
            </Text>
            <Controller
              name="contactMethod"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="mt-4 flex flex-col">
                  {error?.message && (
                    <Text color="danger" italic>
                      {error.message}
                    </Text>
                  )}
                  {contactMethod.map(item => (
                    <div key={item} className="py-2">
                      <Checkbox
                        id={item}
                        label={item}
                        checked={field.value.includes(item)}
                        onCheckedChange={() => field.onChange(item)}
                      />
                    </div>
                  ))}
                </div>
              )}
            />
          </section>
        </section>
        <Divider />
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <Text color="dark" size="xl">
              Upload Any Relevant Files
            </Text>
            <Text>
              Attach any documents, proposals, or briefs related to your project
              to help us better understand your needs.
            </Text>
          </div>
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <Dropdzone onDrop={field.onChange} value={field.value} />
            )}
          />
        </section>
        <Button
          type="submit"
          textAlign="center"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'} <ArrowRightIcon />
        </Button>
        <section className="flex items-center gap-3">
          <ProgressBar active />
          <ProgressBar active />
          <ProgressBar active />
        </section>
      </form>
    </section>
  );
};
