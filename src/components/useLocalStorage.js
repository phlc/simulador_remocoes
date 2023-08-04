import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(function () {
    const storageValue = JSON.parse(localStorage.getItem(key));
    return storageValue || defaultValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [key, state]
  );

  return [state, setState];
}
