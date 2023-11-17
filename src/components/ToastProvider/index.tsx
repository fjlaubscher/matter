import React, { useState, useEffect } from 'react';

// components
import Toast, { TOAST_VISIBLE_TIME } from '../Toast';

// state
import ToastContext from '../../context/toast';

interface Props {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<matter.Toast[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(toasts.slice(1));
        // visible time + animation time
      }, TOAST_VISIBLE_TIME + 200);

      return () => clearTimeout(timer);
    }
  }, [toasts, setToasts]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {toasts.map((toast, index) => (
        <Toast key={`toast-${toast.variant}-${index}`} {...toast} />
      ))}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
