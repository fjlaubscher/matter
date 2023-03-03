import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

// state
import { ToastAtom } from '../state/toast';

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(ToastAtom);

  const toast = useCallback(
    (toast: matter.Toast) => setToasts([...toasts, toast]),
    [toasts, setToasts]
  );

  return toast;
};

export default useToast;
