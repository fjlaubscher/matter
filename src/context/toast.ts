import { createContext } from 'react';

interface ToastContextType {
  toasts: matter.Toast[];
  setToasts: (toasts: matter.Toast[]) => void;
}

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  setToasts: () => {}
});

export default ToastContext;
