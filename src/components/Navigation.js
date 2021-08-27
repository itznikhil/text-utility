import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Text Utility</Navbar.Brand>
            <Nav className="me-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>            
            </Nav>
            </Container>
        </Navbar>
    )
}
