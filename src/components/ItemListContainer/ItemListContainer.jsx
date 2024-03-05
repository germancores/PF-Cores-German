import { useEffect, useState } from 'react';
import {
  getProducts,
  getProductsByCategory,
} from '../../ServerMock/productMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../commons/Spinner/Spinner';
import './Styled.css';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'productos');
      let filteredQuery;

      if (categoryId) {
        const categoryFilter = where('category', '==', categoryId);
        filteredQuery = query(itemsCollection, categoryFilter);
      } else {
        filteredQuery = itemsCollection;
      }

      try {
        const snapshot = await getDocs(filteredQuery);
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(docs);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;