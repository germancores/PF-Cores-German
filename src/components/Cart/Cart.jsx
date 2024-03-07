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
    <div className="cartContainer">
      <h1>Carrito</h1>
      {itemsCart.map((prod) => (
        <div key={prod.id} className="cartItem">
          <p>{prod.name}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio Total: ${prod.price * prod.quantity}</p>
        </div>
      ))}

      <h2 className="cartTotal">Precio total de compra: ${totalPrice}</h2>
      <div className="cartAction">
        <button className="clearButton" onClick={handleClearCart}> Vaciar Carrito</button>
        <Link key="checkoutLink" to="/Checkout" className="checkoutButton"><button>Finalizar compra</button></Link>
      </div>
    </div>
  );
};

export default Cart;
