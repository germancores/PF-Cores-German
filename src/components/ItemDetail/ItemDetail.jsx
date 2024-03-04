import './styles.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import Button from '../commons/Button/Button';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetail({ name, category, stock, img, description, id, price }) {
  const { addItems } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  const onAdd = (quantity) => {
    setProductQuantity(quantity);
    const item = {
      price,
      name,
      quantity,
    };
    addItems(item);
  };

  return (
    <div className="itemDetail" key={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Descripcion: {description}</p>
      <p>stock: {stock} </p>
      <p>Categoria: {category}</p>
      <div className="actionCardDetail">
        {productQuantity > 0 ? (
          <Link to="/cart">
            <Button>Terminar Compra</Button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;