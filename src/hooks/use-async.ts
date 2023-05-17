// https://usehooks.com/useAsync/
import { useCallback, useEffect, useState } from 'react';

const useAsync = <T, E = string>(
  asyncFunction: (...args: any[]) => Promise<T>,
  deps?: React.DependencyList,
  immediate = true
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    (...args: any[]) => {
      setStatus('pending');
      setValue(null);
      setError(null);
      return asyncFunction(...args)
        .then((response: any) => {
          setValue(response);
          setStatus('success');
        })
        .catch((error: any) => {
          setError(error);
          setStatus('error');
        });
    },
    [asyncFunction, deps]
  );

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  return { execute, status, value, error };
};

export default useAsync;
