import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/shield.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from '../Cart/Cart.component';

const Header = ({hidden, toggleCartHidden, itemCount}) => (
	<Navbar bg="danger" variant="dark">
		<Link to='/' className='navbar-brand'>
	      <Logo width="25pt" height="25pt" />
	      <span className='ml-2'>Heroes4U</span>
	    </Link>
	    <Nav className="ml-auto">
	      <Link className='nav-link' to='/'>Home</Link>
	      <Link className='nav-link' to='/shop'>Shop</Link>
	      <Link className='nav-link' to='/mypage'>My page</Link>
	      <Nav.Link><CartIcon onClick={toggleCartHidden} width="25pt" height="15pt"/><span>{itemCount}</span></Nav.Link>
	    </Nav>
	    {
	    	hidden ? null : <Cart />
	    }
	    
  </Navbar>
);

const mapStateToProps = (state) => createStructuredSelector({
	hidden: selectCartHidden,
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleCartHidden })(Header);