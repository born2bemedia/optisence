import { create } from 'zustand';

import type { FormValues } from '../lib';

export const useRequestDialogStore = create<{
  open: boolean;
  setOpen: (value: boolean) => void;
  sent: boolean;
  setSent: (value: boolean) => void;
  step: number;
  setStep: (value: number) => void;
  values: FormValues;
  updateValues: (partialValues: Partial<FormValues>) => void;
}>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
  sent: false,
  setSent: (value: boolean) => set({ sent: value }),
  step: 1,
  setStep: (value: number) => set({ step: value }),
  values: {
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyWebsite: '',
    marketingAdvisory: [],
    corporateGuidance: [],
    budget: '',
    keyObjectives: '',
    points: '',
    industry: '',
    demographics: '',
    projectTimeline: '',
    contactMethod: '',
  },
  updateValues: (partialValues: Partial<FormValues>) =>
    set(state => ({ values: { ...state.values, ...partialValues } })),
}));
