import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../components/styles/navbar.css';

function NavBar() {
    return (
        <div>
           <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">FutbolApp</Navbar.Brand>
    <Nav className="navbar">
      <Nav.Link href="aboutme">Top Leagues</Nav.Link>
      <Nav.Link href="projects">Top Scorers</Nav.Link>
      <Nav.Link href="technologies">Transfer News</Nav.Link>
      <Nav.Link href="getintouch">Schedule</Nav.Link>
    </Nav>
  </Navbar>
        </div>
    )
}

export default NavBar
