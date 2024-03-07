import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { itemsCart, clearCart } = useContext(CartContext);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const pedido = {
            cliente: formData,
            productos: itemsCart.map((prod) => ({
                nombre: prod.name,
                precio: prod.price,
                cantidad: prod.quantity,
                precioTotal: prod.price * prod.quantity,
            })),
            fecha: new Date().toISOString(),
        };

        try {
            const db = getFirestore();
            const pedidosRef = collection(db, 'pedidos');
            const docRef = await addDoc(pedidosRef, pedido);

            setPedidoId(docRef.id);
            console.log('Pedido enviado a Firebase. ID:', docRef.id);
            clearCart();
        } catch (error) {
            console.error('Error al enviar el pedido a Firebase:', error);
        }
    };

    if (pedidoId) {
        return (
            <div>
                <h1>Compra realizada</h1>
                <p>Tu codigo de compra es: {pedidoId}</p>
            </div>
        )
    }
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

export default Checkout;
