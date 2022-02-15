import {Card,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'


function PokemonCard({pokemon}){
    const navigate = useNavigate()
   
    const toPokemonDetail = (a)=>{
        navigate(`/pokemon/${pokemon.id}`)
    }

    return(
        <div  onClick={()=>toPokemonDetail(pokemon)}>
        <Card style={{ width: '15rem', margin: '15px', borderRadius: '5px', backgroundColor: 'blue'}}>
            <Card.Img variant="top" src={pokemon.sprites.front_default} />
                <Card.Body>
                    <h1  style={{ color: 'white' ,textAlign: 'center', fontsize: '10px', fontWeight: 'bold' }}>{pokemon.species.name}</h1>
                    <h2 style={{ color: 'white' ,textAlign: 'center', fontsize: '10px', fontWeight: 'bold' }}>
                        {pokemon.types[0].type.name}
                    </h2>
                </Card.Body>
        </Card>
        </div>
    )
}
export default PokemonCard