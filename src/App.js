import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import Checkout from './Checkout/Checkout';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={
            <div className="item-list">
              <ItemListContainer greeting={'Bienvenido a nuestra tienda de videojuegos'} />
              <p className="App">Descubre las últimas novedades y ofertas en juegos</p>
            </div>
          } />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<div> ERROR: 404, La página no existe</div>} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
    </>
  );
}

export default App;
