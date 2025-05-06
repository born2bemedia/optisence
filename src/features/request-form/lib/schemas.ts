import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const basicInfoSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'Enter the name of the primary contact person' }),
  email: z.string().email({ message: 'Enter a contact email address' }),
  phone: z
    .string()
    .nonempty('Enter a contact phone number')
    .refine(isPhoneValid, 'Invalid phone number format'),
  companyName: z.string().optional(),
  companyWebsite: z.string().optional(),
});
export type BasicInfoSchema = z.infer<typeof basicInfoSchema>;

export const businessGoalsSchema = z.object({
  marketingAdvisory: z
    .array(z.string())
    .min(1, { message: 'Please choose the consulting services' }),
  corporateGuidance: z
    .array(z.string())
    .min(1, { message: 'Please choose the consulting services' }),
  budget: z
    .string()
    .min(1, { message: 'Please select your project’s budget range' }),
  keyObjectives: z
    .string()
    .min(1, { message: 'Enter your company’s key objectives' }),
  points: z
    .string()
    .min(1, { message: 'Enter your company’s challenges or pain points' }),
  industry: z
    .string()
    .min(1, { message: 'Enter your company’s industry/sector' }),
  demographics: z
    .string()
    .min(1, { message: 'Enter your company’s demographics' }),
});
export type BusinessGoalsSchema = z.infer<typeof businessGoalsSchema>;

export const projectTimelineSchema = z.object({
  projectTimeline: z
    .string()
    .min(1, { message: 'Please select your project’s timeline' }),
  contactMethod: z.string().min(1, {
    message: 'Please select your preferred contact method',
  }),
  file: z.instanceof(File).optional(),
});
export type ProjectTimelineSchema = z.infer<typeof projectTimelineSchema>;
