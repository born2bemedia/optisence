import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const orderSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'Enter the name of the contact person' }),
  lastName: z
    .string()
    .min(1, { message: 'Enter the name of the contact person' }),

  email: z.string().email({ message: 'Enter a contact email address' }),
  phone: z
    .string()
    .nonempty('Enter a contact phone number')
    .refine(isPhoneValid, 'Invalid phone number format'),
  companyName: z.string().optional(),
  companyWebsite: z.string().optional(),
  budget: z
    .string()
    .min(1, { message: 'Please select your project’s budget range' }),
  message: z.string().min(1, { message: 'Enter a message' }),
});

export type OrderSchema = z.infer<typeof orderSchema>;
