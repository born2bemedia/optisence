import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const applicationFormSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'Enter the name of the primary contact person' }),
  email: z.string().email({ message: 'Enter a contact email address' }),
  phone: z
    .string()
    .nonempty('Enter a contact phone number')
    .refine(isPhoneValid, 'Invalid phone number format'),
  role: z.string().min(1, { message: 'Select a role' }),
  portfolio: z.string().optional(),
  file: z.instanceof(File, { message: 'Upload a file' }),
  message: z.string().min(1, { message: 'Enter a message' }),
});

export type ApplicationFormSchema = z.infer<typeof applicationFormSchema>;
