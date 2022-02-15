import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, Row} from 'react-bootstrap'
import {pokemonDetailFetch} from '../store/actionCreators/pokemonAction'


function PokemonDetail(){
    const {id} = useParams();
    const {pokemonDetail, loading, error} = useSelector(state=>state.pokemonReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(pokemonDetailFetch(id))
    },[])

    if(loading) return (<p>Loading...</p>)
    if(error) return (<p>Error...</p>)
  
    return (
            
            <center>
            <Container style={{margin: '15px', width: '400px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'blue'}}>
                <Row  className="d-flex justify-content-center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" style={{ width: "300px"}} />
                </Row>
                <h1 style={{textAlign: 'center', color: 'white'}}>{pokemonDetail.name}</h1>
                <h3 style={{textAlign: 'center', color: 'white'}}>Height : {pokemonDetail.height}</h3>
                <h3 style={{textAlign: 'center', color: 'white'}}>Type : {pokemonDetail.types[0].type.name}</h3>
                <br/>
                <h3  style={{textAlign: 'center', color: 'white'}}>Stats</h3>
                <h3   style={{textAlign: 'center', color: 'white'}}>{pokemonDetail.stats[0].stat.name} : {pokemonDetail.stats[0].base_stat}</h3>
                <h3   style={{textAlign: 'center', color: 'white'}}>{pokemonDetail.stats[1].stat.name} : {pokemonDetail.stats[1].base_stat}</h3>
                <h3   style={{textAlign: 'center', color: 'white'}}>{pokemonDetail.stats[2].stat.name} : {pokemonDetail.stats[2].base_stat}</h3>
            </Container>
            </center>
    
    )
}

export default PokemonDetail