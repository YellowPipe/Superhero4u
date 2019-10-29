import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } from './cart.types';
import { addItem, removeItem } from './cart.utils'

const INITIAL_STATE = {
	hidden: true,
	items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case ADD_ITEM:
			return {
				...state,
				items: addItem(action.payload, state.items)
			};
		case REMOVE_ITEM:
			return {
				...state,
				items: removeItem(action.payload, state.items)
			};
		default:
			return state;
	};
};

export default cartReducer;