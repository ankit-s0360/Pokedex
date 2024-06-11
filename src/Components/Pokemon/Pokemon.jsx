import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon({name, image, id}){
    return(
        <div className="pokemons">
          <Link style={{textDecoration: 'none'}} to={`/pokemon/${id}`}>
          <div  className="pokemon-name">{name}</div>
          <div><img className="pokemon-image" src={image} /></div>
          </Link>
        </div>
    )
}

export default Pokemon;