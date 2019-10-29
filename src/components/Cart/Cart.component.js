import React from 'react';

import { connect } from 'react-redux';

import './cart.styles.css';

import Button from 'react-bootstrap/Button';
import CartItem from '../CartItem/CartItem.component';

const Cart = ({items}) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{
				items.map(({name, salary, id, quantity}) => (
					<CartItem key={id} id={id} name={name} price={salary} quantity={quantity}/>
					)
				)
			}
		</div>
		<Button className="my-2 py-2">CHECKOUT</Button>
	</div>
);

const mapStateToProps = ({cart}) => ({
	items: cart.items
});

export default connect(mapStateToProps)(Cart);