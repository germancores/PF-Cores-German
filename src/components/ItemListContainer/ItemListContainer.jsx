import { useEffect, useState } from 'react';
import {
  getProducts,
  getProductsByCategory,
} from '../../ServerMock/productMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../commons/Spinner/Spinner';
import './Styled.css';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts;
      setIsLoading(true);
      try {
        const res = await asyncFunc(categoryId);
        setItems(res);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId, setIsLoading]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
