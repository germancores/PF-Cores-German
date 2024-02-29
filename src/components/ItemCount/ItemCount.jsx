import React from 'react';
import './counterStyled.css';
import { useCount } from '../../hooks/useCount';
import Button from '../commons/Button/Button';

function Counter({ onAdd }) {
  const { add, subtraction, valor } = useCount(0, 0, 10);
  return (
    <>
      <div className="counter">
        <button onClick={subtraction}>-</button>
        <p>{valor}</p>
        <button onClick={add}>+</button>
      </div>
      <Button disabled={valor === 0} onClick={() => onAdd(valor)}>
        Agregar al carrito
      </Button>
    </>
  );
}

export default Counter;
