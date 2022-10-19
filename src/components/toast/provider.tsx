import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

// components
import Toast, { TOAST_VISIBLE_TIME } from '.';

// state
import { ToastAtom } from '../../state/toast';

interface Props {
  children: React.ReactNode;
}

const ToastProvider: React.FC<Props> = ({ children }) => {
  const [toasts, setToasts] = useRecoilState(ToastAtom);

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
    <>
      {toasts.map((toast, index) => (
        <Toast key={`toast-${toast.variant}-${index}`} {...toast} />
      ))}
      {children}
    </>
  );
};

export default ToastProvider;
