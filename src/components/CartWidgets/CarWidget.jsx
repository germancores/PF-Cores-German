import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CarWidget.css';
import { useContext } from 'react';
import { sumaQuantities } from '../../utils/sumQuantitiesCart';
import CartContext from '../../context/CartContext';

function CarWidget({ number, clickEnCarrito, isShowModal }) {
  const { itemsCart } = useContext(CartContext);
  return (
    <div className="containerCart">
      <ShoppingCartIcon className="cartIcon" />
      <span className="cartNumber">{sumaQuantities(itemsCart)}</span>
    </div>
  );
}

export default CarWidget;
