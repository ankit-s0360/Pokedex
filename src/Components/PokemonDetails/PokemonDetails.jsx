
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}) {

    const { id } = useParams();
    
    const[pokemon] = usePokemonDetails({id, pokemonName});
    // console.log(pokemon.similarPokemons.name);

    return(
        <div className="pokemon-details-wrapper">
            <div className="pokemon-image-details"><img src={pokemon.image}/></div>
            <div className="pokemon-name-details">{pokemon.name}</div>
            <div className="pokemon-height-details">Height: {pokemon.height}</div>
            <div className="pokemon-weight-details">Weight: {pokemon.weight}</div>
            <div className="pokemon-types-details"> {pokemon.types && pokemon.types.map((t)=> <div className="pokemon-types" key={t}>{t}</div>)}</div>

            <div className="similar-pokemons">
                {
                pokemon.types && pokemon.similarPokemons && <ul>
                  <div className="pokemon-typeList">more {pokemon.types[0]} type pokemons</div>
                  {pokemon.similarPokemons && pokemon.similarPokemons.map((p) => <li key= {p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
                }
                
            </div>
        </div>
    );
}

export default PokemonDetails;