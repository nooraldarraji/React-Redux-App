import React from 'react';
import './App.css';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import  logger  from 'redux-logger';
import { connect } from 'react-redux';

import  { pokemonReducer } from './store/reducers/pokemonReducer';
import { fetchPokemon } from './store/actions/pokemonAction';

//https://pokeapi.co/api/v2/pokemon/
export const store = createStore(pokemonReducer, applyMiddleware(thunk))


function App(props) {
	console.log(props)
	
	const getPoke = (e) => {
		 //e.preventDefault()
		// props.fetchPokemon
	}
  return (
    <div className="App">
	{props.isLoading && <h2>Loading...</h2> }
	{!props.isLoading && !props.error && 
	props.pokemon.map(e => <h5>{e.name}</h5>)}	
    	<button onClick={props.fetchPokemon}>Get Pokee </button>
    </div>
  );
}

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon,
		isLoading: state.isLoading,
		error: state.error
	}
}

export default connect(mapStateToProps, { fetchPokemon })(App);
