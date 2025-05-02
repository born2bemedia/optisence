'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/utils';

export const FadeIn = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className={className}
  >
    {children}
  </motion.div>
);
