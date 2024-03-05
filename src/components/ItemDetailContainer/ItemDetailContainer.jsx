import React from 'react';
import { getProductById } from '../../ServerMock/productMock';
import { useEffect, useState, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles.css';
import { useParams } from 'react-router-dom';
import Spinner from '../commons/Spinner/Spinner';
import CartContext from '../../context/CartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    const fetchProductDetail = async () => {
      const db = getFirestore();
      const itemDocRef = doc(db, 'productos', itemId);

      try {
        setProductDetail({ loading: true });
        const itemDocSnapshot = await getDoc(itemDocRef);

        if (itemDocSnapshot.exists()) {
          const itemData = itemDocSnapshot.data();
          setProductDetail({ data: itemData, loading: false });
        } else {
          setProductDetail({ error: true, loading: false });
        }
      } catch (error) {
        console.error(error);
        setProductDetail({ error: true, loading: false });
      }
    };

    fetchProductDetail();
  }, [itemId]);

  if (productDetail.loading) {
    return <Spinner isLoading={productDetail.loading} />;
  }

  if (productDetail.error) {
    return <h1>¡Ha ocurrido un error, intentelo nuevamente!</h1>;
  }

  return (
    <div className="containerDetail">
      {productDetail.data && <ItemDetail {...productDetail.data} />}
    </div>
  );
}

export default ItemDetailContainer;