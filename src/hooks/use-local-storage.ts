import { useCallback, useState } from 'react';

const useLocalStorage = <T>(key: string): [T | undefined, (data: T) => void] => {
  const storedJSON = localStorage.getItem(key);
  const parsed = storedJSON ? JSON.parse(storedJSON) : undefined;
  const [data, setData] = useState<T | undefined>(parsed);

  const storeAndSetData = useCallback(
    (data: T) => {
      setData(data);
      localStorage.setItem(key, JSON.stringify(data));
    },
    [setData]
  );

  return [data, storeAndSetData];
};

export default useLocalStorage;
