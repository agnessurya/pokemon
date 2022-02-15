import {POKEMON_FETCH,POKEMON_LOADING,POKEMON_ERROR, POKEMON_DETAIL} from '../actionTypes/index'

const setLoading = (payload) => {
    return {type: POKEMON_LOADING, payload}
}

const setError = (payload) => {
    return {type: POKEMON_ERROR, payload}
}

const setPokemon = (payload) => {
    return {type : POKEMON_FETCH, payload}
}

const setPokemonDetail = (payload) => {
    return {type : POKEMON_DETAIL, payload}
}


export const pokemonFetch = (payload) =>{
    return (dispatch,getState) =>{
        return new Promise((resolve,reject) =>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((resp)=>{
                if(resp.ok){
                    return resp.json()
                }
                else{
                   throw new Error('Error Fetch Pokemon')
                }
            })
            .then((data)=>{
                return data.results
            })
            .then((data)=>{
                 data.map((el)=>{
                   fetch(el.url)
                   .then((resp)=>{
                       if(resp.ok){
                        console.log(resp, `ahfhafhfa`)
                           return resp.json()
                    }
                    else{
                       throw new Error('Error Fetch Pokemon')
                    }
                })
                .then((data)=>{
                    console.log(data, `ajafoijehhw`)
                    const arr = []
                    arr.push(data)
                    dispatch(setPokemon(arr))
                    resolve(arr)
                })
                })
              
            })
            .catch((error)=>{
                dispatch(setError(error))
            })
            .finally(()=>{
                dispatch(setLoading(false))
            })
        })
    }
}



export const pokemonDetailFetch = (id) =>{
    return (dispatch,getState) =>{
        return new Promise((resolve,reject) =>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp)=>{
                if(resp.ok){
                    return resp.json()
                }
                else{
                   throw new Error('Error Fetch Pokemon Detail')
                }
            })
            .then((data)=>{
                console.log(data, `dataa`)
                dispatch(setPokemonDetail(data))
                resolve(data)
            })
            .catch((error)=>{
                console.log(error, "Failed Fetch Detail")
                dispatch(setError(error))
            })
            .finally(()=>{
                dispatch(setLoading(false))
            })
        })
    }
}





