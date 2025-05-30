import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils';

export const createOrderSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    firstName: z.string().min(1, { message: t('name') }),
    lastName: z.string().min(1, { message: t('name') }),
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

export type OrderSchema = z.infer<ReturnType<typeof createOrderSchema>>;
