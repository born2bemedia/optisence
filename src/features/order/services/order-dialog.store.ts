import { create } from 'zustand';

export const useOrderDialogStore = create<{
  open: boolean;
  setOpen: (value: boolean) => void;
  sent: boolean;
  setSent: (value: boolean) => void;
  productName: string;
  productPrice: string;
  setProductName: (value: string) => void;
  setProductPrice: (value: string) => void;
}>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
  sent: false,
  setSent: (value: boolean) => set({ sent: value }),
  productName: '',
  setProductName: (value: string) => set({ productName: value }),
  productPrice: '',
  setProductPrice: (value: string) => set({ productPrice: value }),
}));
