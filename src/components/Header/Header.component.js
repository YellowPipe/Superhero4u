import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
	<Navbar bg="light" variant="light">
	    <Navbar.Brand href="#home">
	      <img
	        alt=""
	        src="/logo.svg"
	        width="30"
	        height="30"
	        className="d-inline-block align-top"
	      />{' '}
	      React Bootstrap
	    </Navbar.Brand>
  </Navbar>
);

export default Header;