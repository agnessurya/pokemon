import {POKEMON_FETCH,POKEMON_LOADING,POKEMON_ERROR, POKEMON_DETAIL} from '../actionTypes/index'

const initialState = {
    pokemons : [],
    loading : true,
    error : null,
    pokemonDetail :{}
}

export default function pokemonReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case POKEMON_FETCH:
            return{
                ...state,
                pokemons : action.payload
            }

        case POKEMON_LOADING:
            return{
                ...state,
                loading : action.payload
            }

        case POKEMON_ERROR: 
            return{
                ...state,
                error : action.payload
            }

        case POKEMON_DETAIL: 
            return{
                ...state,
                pokemonDetail : action.payload
            } 
            
        default:
        return state
    }
  }