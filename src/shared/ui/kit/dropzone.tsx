'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslations } from 'next-intl';

import { BoxIcon } from '@/shared/ui/icons/orange';
import { Text } from '@/shared/ui/kit/text';
export const Dropdzone = ({
  required,
  name,
  onDrop,
  value,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
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
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#DFDFDF] bg-[#F3F3F3] p-4">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="flex flex-col items-center justify-center gap-2.5 text-center"
      >
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <BoxIcon />
        <button
          className="text-[#1F2420]"
          type="button"
          onClick={e => {
            e.stopPropagation();
            open();
          }}
        >
          {t('fullLabel')}
        </button>
        <Text color="dark">
          {t('selectedFile')}: {file ? file.name : t('placeholder')}
        </Text>
        <Text>{t('attachFile')}</Text>
      </div>
    </div>
  );
};
