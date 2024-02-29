import React from 'react';
import './styles.css';

function Item({ name, stock, img, id, price }) {
  return (
    <div className="item" key={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Precio : {price}</p>
      <p>Stock disponible: {stock}</p>
    </div>
  );
}

export default Item;
