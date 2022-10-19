import { atom } from 'recoil';

export const ToastAtom = atom<matter.Toast[]>({
  key: 'toasts',
  default: []
});
