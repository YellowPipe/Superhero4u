import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Logo } from '../../assets/shield.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from '../Cart/Cart.component';

const Header = ({hidden, toggleCartHidden}) => (
	<Navbar bg="danger" variant="dark">
		<Link to='/' className='navbar-brand'>
	      <Logo width="25pt" height="25pt" />
	      <span className='ml-2'>Heroes4U</span>
	    </Link>
	    <Nav className="ml-auto">
	      <Link className='nav-link' to='/'>Home</Link>
	      <Link className='nav-link' to='/shop'>Shop</Link>
	      <Link className='nav-link' to='/mypage'>My page</Link>
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