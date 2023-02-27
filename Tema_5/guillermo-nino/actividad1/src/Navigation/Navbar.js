import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraNavegacion() {
  return (
    <Navbar bg="dark" variant='dark' className='sticky-top'>
      <Container fluid>
        <Navbar.Brand href="#home">UNIR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tema">Tema 5</Nav.Link>
            <NavDropdown title="Acciones" id="menu-desplegable">
              <NavDropdown.Item href="#action/3.1">Descargar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Compilar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Validar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;