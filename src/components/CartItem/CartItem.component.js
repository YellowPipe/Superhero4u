import React from 'react';
import { connect } from 'react-redux';

import './CartItem.styles.css';

import { removeItem } from '../../redux/cart/cart.actions';

const CartItem = ({name, price, quantity, id, removeItem}) => (
	<div className='cart-item my-2 mx-1'>
		<div>
			<span>{name}</span>
		</div>
		<div>
			<span>${price} x {quantity}</span>
		</div>
		<div>
			<span className='remove-icon' onClick={()=>{removeItem(id)}}>&#10005;</span>
		</div>
	</div>
);

export default connect(null, { removeItem })(CartItem);