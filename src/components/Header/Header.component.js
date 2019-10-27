import React from 'react';
import { ReactComponent as Logo } from '../../shield.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
	<Navbar bg="danger" variant="dark">
	    <Navbar.Brand href="#home">
	      	<Logo width="25pt" height="25pt" />
	      <span className='ml-2'>Heroes4U</span>
	    </Navbar.Brand>
	    <Nav className="mr-auto">
	      <Nav.Link href="#home">Home</Nav.Link>
	      <Nav.Link href="#me">My page</Nav.Link>
	      <Nav.Link href="#contact">Contact</Nav.Link>
	    </Nav>
  </Navbar>
);

export default Header;