import { useEffect, useState } from 'react';
function useDebounce(value, delay) {
  // eslint-disable-next-line
  const handler = setTimeout(() => setDebounceValue(value), delay);
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
}
export default useDebounce;
