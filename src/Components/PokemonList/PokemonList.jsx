import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";


function PokemonList(){

  const [pokemonListState, setPokemonListState] = usePokemonList();
     
    return(
        <div className="pokemonList-wrapper">
          <div className="pokemon-wrapper">{(pokemonListState.setIsLoading) ? 'Loading....':
            pokemonListState.pokemonList.map((p) => <Pokemon name= {p.name} image= {p.image} key= {p.id} id= {p.id}/>)
          }</div>

          <div className="controls">
            {/* <button disabled = {prevUrl == undefined} onClick={() => setPokedexUrl(prevUrl)}>Prev</button> */}
            <button disabled = {pokemonListState.prevUrl == undefined} onClick={() => {
              const urlToSet = pokemonListState.prevUrl;
              setPokemonListState({...pokemonListState, pokedexUrl: urlToSet})
              }}>Prev</button>
            {/* <button disabled = {nextvUrl == undefined} onClick={() => setPokedexUrl(nextvUrl)}>Next</button> */}
            <button disabled = {pokemonListState.nextUrl == undefined} onClick={() => {
              const urlToSet = pokemonListState.nextUrl;
              setPokemonListState({...pokemonListState, pokedexUrl: urlToSet})
            }}>Next</button>
          </div>
          
        </div>
    )
}

export default PokemonList;