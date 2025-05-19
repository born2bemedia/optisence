'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import { ArrowRightIcon } from '../icons/outline';
import { Button } from './button';

export const MinifiedDropdzone = ({
  required,
  name,
  onDrop,
  value,
  error,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
  error?: string;
}) => {
  const t = useTranslations('dropzone');

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: incomingFiles => {
      if (onDrop) {
        onDrop(incomingFiles[0] || null);
      }
    },
  });

  const file = value ?? acceptedFiles[0];

  return (
    <div className="flex w-full rounded-3xl border border-dashed border-[#DFDFDF] bg-[#F3F3F3] p-4">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="flex w-full items-center justify-between gap-2.5 text-center"
      >
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <Button
          type="button"
          variant="outline"
          onClick={e => {
            e.stopPropagation();
            open();
          }}
        >
          {t('label')}
          <ArrowRightIcon color="#FF572D" />
        </Button>
        <section className="flex flex-col gap-3">
          <Text color={error ? 'danger' : 'dark'}>
            {file ? file.name : t('placeholder')}
          </Text>
          <Text>(PDF, 10MB max)</Text>
        </section>
      </div>
    </div>
  );
};
