import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <>
        <Navbar bg="light" data-bs-theme="light" className='header'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="faq" >FAQ</NavLink>
            <NavLink to="products">Products</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
