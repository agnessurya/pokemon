import {Container, Row} from 'react-bootstrap'
import PokemonCard from "../components/PokemonCard"
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {pokemonFetch} from '../store/actionCreators/pokemonAction'

function Home(){
    const {pokemons, loading, error} = useSelector(state=>state.pokemonReducer)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(pokemonFetch())
    },[])

    if(loading) return (<p>Loading...</p>)
    if(error) return (<p>Error...</p>)
    return(
        <div>
        <Container>
            <Row>
    
                {
                    pokemons.map((pokemon)=>{
                      return  <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
                    })
                }
               
            </Row>
        </Container>
        </div>
    )
}

export default Home