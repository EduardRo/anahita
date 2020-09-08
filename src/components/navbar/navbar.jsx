import React from 'react';
import { Navbar, Container, NavLink, Nav } from 'react-bootstrap';
import './navbar.scss';

const NavBarComponent = () => {
  return (
    <Container>
      <Navbar expand='lg' className='navbar'>
        <Navbar.Brand href='/'>Anahita</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <NavLink href='/tests'>TESTS</NavLink>
            <NavLink href='/results'>RESULTS</NavLink>
            <NavLink href='/login'>LOGIN</NavLink>
            <NavLink href='/settings'>SETTINGS</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBarComponent;
