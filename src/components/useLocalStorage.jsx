import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const initValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;