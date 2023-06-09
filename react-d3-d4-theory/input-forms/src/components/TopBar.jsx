// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = props => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">
        {props.brand} — {props.claim}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Menu</Nav.Link>
          <Nav.Link href="#link">Contatti</Nav.Link>
          <Nav.Link href="#link">Dove Siamo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopBar;
