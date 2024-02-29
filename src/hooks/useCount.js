import { useState } from 'react';

export const useCount = (initialState, min, max) => {
  const [valor, setValor] = useState(initialState);

  const add = () => {
    if (valor < max) setValor(valor + 1);
  };
  const subtraction = () => {
    if (valor > min) setValor(valor - 1);
  };

  return { add, subtraction, valor };
};
