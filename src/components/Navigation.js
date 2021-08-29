import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <NavLink to="/" className="navbar-brand">Text Utility</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>            
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
