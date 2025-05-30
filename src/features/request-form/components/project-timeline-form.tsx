'use client';

import { useTranslations } from 'next-intl';

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

import {
  createProjectTimelineSchema,
  type ProjectTimelineSchema,
} from '../lib';
import { sendRequestForm, useRequestDialogStore } from '../services';

export const ProjectTimelineForm = () => {
  const t = useTranslations('requestForm.3');
  const tb = useTranslations('requestForm.btn');
  const te = useTranslations('requestForm.3.errors');

  const { values, updateValues, setSent } = useRequestDialogStore();

  const projectTimelineSchema = createProjectTimelineSchema(te);

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

  const timeline = [
    t('timeline.0'),
    t('timeline.1'),
    t('timeline.2'),
    t('timeline.3'),
  ];

  const contactMethod = [t('contact.0'), t('contact.1'), t('contact.2')];

  return (
    <section className="flex flex-col gap-12">
      <Title color="primary" size="lg">
        {t('title')}
      </Title>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <section className="flex h-full gap-6 max-sm:flex-col">
          <section className="flex flex-1/3 flex-col">
            <Text color="dark" size="xl">
              {t('projectTimeline')}
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
              {t('contactMethod')}
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
              {t('uploadRelevantFiles')}
            </Text>
            <Text>{t('attachFiles')}</Text>
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
          {isSubmitting ? tb('submitting') : tb('submit')}
          <ArrowRightIcon />
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
