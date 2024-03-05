// import React, { useContext, useState } from 'react';
// import CartContext from '../../context/CartContext';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const Contacto = () => {
//   const { itemsCart } = useContext(CartContext);

//   const [formData, setFormData] = useState({
//     email: '',
//     fullName: '',
//     isNotBot: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Datos del formulario:', formData);
//     console.log('Lista de compra:', itemsCart);
//   };

//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Contacto;

import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  const { itemsCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    isNotBot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos del formulario:', formData);
    console.log('Detalles del carrito:');
    itemsCart.forEach((prod) => {
      console.log(`
        Consola ${prod.name}
        Precio unitario: $${prod.price}
        Cantidad: ${prod.quantity}
        Precio Total: $${prod.price * prod.quantity}
      `);
    });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            No compartiremos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre de cliente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre y apellido"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="No soy un bot"
            name="isNotBot"
            checked={formData.isNotBot}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Enviar compra
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;
