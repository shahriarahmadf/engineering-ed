import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">EngineeringEd</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

                <Nav.Link href="/courses">Courses</Nav.Link>

                <Nav.Link href="/blogs">Blogs</Nav.Link>

                <Nav.Link href="/faq">FAQ</Nav.Link>
                
            </Nav>
            
            <Nav>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

export default Header;