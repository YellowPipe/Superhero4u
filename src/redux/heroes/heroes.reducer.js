import {
		SET_HEROES_BEGIN, SET_HEROES_SUCCESS, SET_HEROES_FAILURE
	} from './heroes.types';

const INITIAL_STATE = {
	heroes: [],
	loading: false,
	error: null
};

const heroesReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_HEROES_BEGIN:
			return {
				...state,
				loading: true,
				error: false
			};
		case SET_HEROES_SUCCESS:
			return {
				...state,
				heroes: action.payload,
				loading: false
			};
		case SET_HEROES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	};
};

export default heroesReducer;