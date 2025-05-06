'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

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
          Choose new file
        </button>
        <Text color="dark">
          Selected file: {file ? file.name : 'No file selected'}
        </Text>
        <Text>
          Attach any relevant documents, resumes, proposals, or briefs (Max
          size: 10MB)
        </Text>
      </div>
    </div>
  );
};
