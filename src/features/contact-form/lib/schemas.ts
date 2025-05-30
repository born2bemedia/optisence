import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const createContactSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    firstName: z.string().min(1, { message: t('firstName') }),
    lastName: z.string().min(1, { message: t('lastName') }),
    email: z.string().email({ message: t('email') }),
    phone: z
      .string()
      .nonempty(t('phone'))
      .refine(isPhoneValid, t('invalidPhone')),
    companyName: z.string().optional(),
    companyWebsite: z.string().optional(),
    budget: z.string().min(1, { message: t('budget') }),
    message: z.string().min(1, { message: t('message') }),
  });

export type ContactSchema = z.infer<ReturnType<typeof createContactSchema>>;
