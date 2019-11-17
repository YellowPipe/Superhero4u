import {
		SET_HEROES_BEGIN, SET_HEROES_SUCCESS, SET_HEROES_FAILURE
	} from './heroes.types';
import { API_URL } from '../../constants/constants';

export const setHeroesBegin = () => ({
	type: SET_HEROES_BEGIN
});

export const setHeroesSuccess = (heroes) => ({
	type: SET_HEROES_SUCCESS,
	payload: heroes
});

export const setHeroesFailure = (error) => ({
	type: SET_HEROES_FAILURE,
	payload: error
});

export const setHeroes = () => {
	return dispatch => {
    	dispatch(setHeroesBegin());
    	return fetch(`${API_URL}/heroes`, {
	      method: 'GET'
	    })
      	.then(res => res.json())
      	.then(heroes => {
        	dispatch(setHeroesSuccess(heroes));
      	})
      	.catch(error => {
      		dispatch(setHeroesFailure(error))
      	});
  	};
};