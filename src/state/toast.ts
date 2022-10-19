import { atom } from 'recoil';

export const ToastAtom = atom<Toast[]>({
  key: 'toasts',
  default: []
});
