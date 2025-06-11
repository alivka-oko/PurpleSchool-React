import { SetStateAction, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initalState: T) {
  const [data, setData] = useState(initalState);

  useEffect(() => {
    if (key) {
      const item = localStorage.getItem(key);
      if (item !== null) {
        const res = JSON.parse(item);
        setData(res);
      }
    }
  }, [key]);

  const saveData = (newData: SetStateAction<T>) => {
    localStorage.setItem(
      key,
      JSON.stringify(
        typeof newData === 'function' ? (newData as Function)(data) : newData
      )
    );
    setData(newData);
  };
  return [data, saveData] as const;
}
