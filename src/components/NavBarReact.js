import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const NavBarReact = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Articles DJ-React</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          <Nav.Link href="/">Posts</Nav.Link>
          <Nav.Link eventKey={2} href="/link">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
  )
}
export default NavBarReact;