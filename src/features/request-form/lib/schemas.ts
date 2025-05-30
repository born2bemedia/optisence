import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const createBasicInfoSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    fullName: z.string().min(1, { message: t('fullName') }),
    email: z.string().email({ message: t('email') }),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('invalidPhone')),
    companyName: z.string().optional(),
    companyWebsite: z.string().optional(),
  });
export type BasicInfoSchema = z.infer<ReturnType<typeof createBasicInfoSchema>>;

export const createBusinessGoalsSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    marketingAdvisory: z
      .array(z.string())
      .min(1, { message: t('marketingAdvisory') }),
    corporateGuidance: z
      .array(z.string())
      .min(1, { message: t('corporateStrategy') }),
    budget: z.string().min(1, { message: t('budget') }),
    keyObjectives: z.string().min(1, { message: t('keyObjectives') }),
    points: z.string().min(1, { message: t('points') }),
    industry: z.string().min(1, { message: t('industry') }),
    demographics: z.string().min(1, { message: t('demographics') }),
  });
export type BusinessGoalsSchema = z.infer<
  ReturnType<typeof createBusinessGoalsSchema>
>;

export const createProjectTimelineSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    projectTimeline: z.string().min(1, { message: t('projectTimeline') }),
    contactMethod: z.string().min(1, { message: t('contactMethod') }),
    file: z.instanceof(File).optional(),
  });
export type ProjectTimelineSchema = z.infer<
  ReturnType<typeof createProjectTimelineSchema>
>;
