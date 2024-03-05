import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { itemsCart, clearCart } = useContext(CartContext);

  const totalPrice = itemsCart.reduce((total, prod) => {
    return total + prod.price * prod.quantity;
  }, 0);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <h1>Carrito</h1>
      {itemsCart.map((prod) => (
        <div key={prod.id}>
          <p>{prod.name}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio Total: ${prod.price * prod.quantity}</p>
        </div>
      ))}

      <h2>Precio total de compra: ${totalPrice}</h2>
      <button onClick={handleClearCart}>Vaciar Carrito</button>
      <Link to= "/Contacto">Finalizar compra</Link> 
    </div>
  );
};

export default Cart;