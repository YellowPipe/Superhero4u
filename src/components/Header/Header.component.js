import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Logo } from '../../assets/shield.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from '../Cart/Cart.component';

const Header = ({hidden, toggleCartHidden}) => (
	<Navbar bg="danger" variant="dark">
	    <Navbar.Brand href="#home">
	      	<Logo width="25pt" height="25pt" />
	      <span className='ml-2'>Heroes4U</span>
	    </Navbar.Brand>
	    <Nav className="ml-auto">
	      <Nav.Link>Home</Nav.Link>
	      <Nav.Link>My page</Nav.Link>
	      <Nav.Link>Contact</Nav.Link>
	      <Nav.Link><CartIcon onClick={toggleCartHidden} width="25pt" height="15pt"/></Nav.Link>
	    </Nav>
	    {
	    	hidden ? null : <Cart />
	    }
	    
  </Navbar>
);

const mapStateToProps = ({cart}) => ({
	hidden: cart.hidden
});

export default connect(mapStateToProps, { toggleCartHidden })(Header);