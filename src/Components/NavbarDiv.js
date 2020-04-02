import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

function NavbarDiv() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' className='shadow-lg'>
            <Navbar.Brand href="#home" className='ml-3'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        
                    </Nav> */}
                <Nav className='mr-auto' />
                <Nav>
                    <Nav.Link eventKey={2} href="#about">
                        About
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#special">
                        Special
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#menu">
                        Menu
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#reviews">
                        Reviews
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#contact">
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarDiv