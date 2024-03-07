import Item from '../Item/Item';
import './styles.css';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div className="listItems">
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <Item {...item} isClickable />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
