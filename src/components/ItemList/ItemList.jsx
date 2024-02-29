import Item from '../Item/Item';
import './styles.css';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div className="listItems">
      {items.map((item) => {
        return (
          <Link to={`/item/${item.id}`}>
            <Item {...item} isClickable />
          </Link>
        );
      })}
    </div>
  );
}

export default ItemList;
