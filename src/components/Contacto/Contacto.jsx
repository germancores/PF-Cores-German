import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          No compartiremos tu email con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre de cliente</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre y apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;