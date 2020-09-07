import React from 'react';
import { Navbar, Container, NavLink, Nav } from 'react-bootstrap';
import './navbar.scss';

const NavBarComponent = () => {
  return (
    <Container>
      <Navbar bg='light' variant='light' expand='lg' class='navbar'>
        <Navbar.Brand href='#home'>Anahita</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <NavLink href='#home'>Home</NavLink>
            <NavLink href='#features'>Tests</NavLink>
            <NavLink href='#pricing'>Results</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBarComponent;
