import { useState } from 'react';

export const useToggle = (state = fales) => {
  const [value, setValue] = useState(state);

  const toggle = () => {
    setValue((prev) => !prev);
  };
  return [value, toggle];
};
