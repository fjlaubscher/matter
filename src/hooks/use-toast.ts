import { useCallback, useContext } from 'react';

// context
import ToastContext from '../context/toast';

const useToast = () => {
  const { toasts, setToasts } = useContext(ToastContext);

  return useCallback((toast: matter.Toast) => setToasts([...toasts, toast]), [toasts, setToasts]);
};

export default useToast;
