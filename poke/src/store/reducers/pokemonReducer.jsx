import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS , FETCH_POKEMON_FAILURE } from '../actions/pokemonAction'



const initialState = {
	pokemon: [],
	isLoading: false,
	error: ''
}

export const pokemonReducer = (state = initialState, action) => {
	switch(action.type){
		case FETCH_POKEMON_START:
			return { ...state, isLoading: true, error: '' }
		case FETCH_POKEMON_SUCCESS:
			return { isLoading: false , pokemon:[...action.payload], error: ''}
		case FETCH_POKEMON_FAILURE:
			return { ...state, error: action.payload, isLoading: false }
	default:
		return state;
	}
}

//export default pokemonReducer;                    
