import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">À partir d'où voit-on ?</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Découvrir</Nav.Link>
            
            <NavDropdown title="Participer" id="collasible-nav-dropdown">
              <NavDropdown.Item href="contrib/sign">Ajouter un panneau</NavDropdown.Item>
              <NavDropdown.Item href="contrib/place">Ajouter un lieu</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="projet">Le projet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="login">Connexion</Nav.Link>
            <Nav.Link href="register">Inscription</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;