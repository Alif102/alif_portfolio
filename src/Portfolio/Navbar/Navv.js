import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
import {MdDeveloperMode} from 'react-icons/md'

const Navv = () => {
  return (
    <div>
        <Navbar bg="#071314" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand to="#home">WebDev. <MdDeveloperMode size={35}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-cls">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>

       
    </div>
  )
}

export default Navv