import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">FutbolApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar">
      <Nav.Link href="/scores">Scores</Nav.Link>
      <Nav.Link href="/schedule">Schedule</Nav.Link>
      <Nav.Link href="/transfers">Transfers</Nav.Link>
      <NavDropdown title="Leagues" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.3">Champions League</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">MLS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">EPL</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">La Liga</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Serie A</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Bundesliga</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Tables" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.3">Champions League</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">MLS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">EPL</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">La Liga</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Serie A</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Bundesliga</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar
