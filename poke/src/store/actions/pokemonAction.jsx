import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemon  = () => dispatch => {
	console.log()
	dispatch({ type: FETCH_POKEMON_START })	
	// to make is loadding loading
	axios.get(`https://pokeapi.co/api/v2/pokemon/`)
		.then(res => {
			console.log(res.data.results)
			dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })	
	
		}).catch(error => {
			dispatch({ type: FETCH_POKEMON_FAILURE, payload: error })	
			
		})
}
