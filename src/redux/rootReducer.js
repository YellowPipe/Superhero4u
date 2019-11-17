import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';
import heroesReducer from './heroes/heroes.reducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	heroes: heroesReducer
});

export default rootReducer;