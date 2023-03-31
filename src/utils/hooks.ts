import { useEffect, useRef, useState } from "react";

export function useLocalStorageState(key: string, defaultValue = "light") {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export function useThemeMode(key: string) {
  const valueInLocalStorage = window.localStorage.getItem(key) as string;
  return JSON.parse(valueInLocalStorage);
}
