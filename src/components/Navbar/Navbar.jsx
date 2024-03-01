import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBarStyled.css';
import CarWidget from '../CartWidgets/CarWidget';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/img/logo.jpg';

function BasicExample() {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary, navbar-nav">
      <Container>
      <div className="container-logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <Link to="/">
        <Navbar.Brand href="#home">Pro Gamer Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
            <Nav.Link href='#home'>Inicio</Nav.Link>
            </Link>
            <Link to="/Contacto">
            <Nav.Link href='contact'>Contacto</Nav.Link>
            </Link>
            <Link to="/">
            <Nav.Link href="#products">Productos</Nav.Link>
            </Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavLink to="/category/console">
              <NavDropdown.Item href="#consolas">Consolas</NavDropdown.Item>
              </NavLink>
              <NavLink to="/category/game">
              <NavDropdown.Item href="#juegos">
                Juegos
              </NavDropdown.Item>
              </NavLink>
              <NavLink to="/category/joystick">
              <NavDropdown.Item href="#mandos">Mandos</NavDropdown.Item>
              </NavLink>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CarWidget number={0} handleClick={handleClick} />
      </Container>
    </Navbar>
  );
}

export default BasicExample;