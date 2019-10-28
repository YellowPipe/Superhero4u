import React from 'react';
import { ReactComponent as Logo } from '../../assets/shield.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
	<Navbar bg="danger" variant="dark">
	    <Navbar.Brand href="#home">
	      	<Logo width="25pt" height="25pt" />
	      <span className='ml-2'>Heroes4U</span>
	    </Navbar.Brand>
	    <Nav className="ml-auto">
	      <Nav.Link href="#home">Home</Nav.Link>
	      <Nav.Link href="#me">My page</Nav.Link>
	      <Nav.Link href="#contact">Contact</Nav.Link>
	      <Nav.Link href="#cart"><CartIcon width="25pt" height="15pt"/></Nav.Link>
	    </Nav>
  </Navbar>
);

export default Header;