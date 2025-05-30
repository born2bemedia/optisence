import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const createApplicationFormSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    fullName: z.string().min(1, { message: t('fullName') }),
    email: z.string().email({ message: t('email') }),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('invalidPhone')),
    role: z.string().min(1, { message: t('role') }),
    portfolio: z.string().optional(),
    file: z.instanceof(File, { message: t('portfolio') }),
    message: z.string().min(1, { message: t('message') }),
  });

export type ApplicationFormSchema = z.infer<
  ReturnType<typeof createApplicationFormSchema>
>;
