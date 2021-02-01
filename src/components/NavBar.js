import React from 'react'

function NavBar() {
    return (
        <div>
                <>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">JP Castrillon Portfolio</Navbar.Brand>
    <Nav className="navbar">
      <Nav.Link href="aboutme">About Me</Nav.Link>
      <Nav.Link href="projects">Projects</Nav.Link>
      <Nav.Link href="technologies">Technologies</Nav.Link>
      <Nav.Link href="getintouch">Get in Touch</Nav.Link>



    </Nav>
  </Navbar>
</>
        </div>
    )
}

export default NavBar
