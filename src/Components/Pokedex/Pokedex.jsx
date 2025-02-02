import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

// css import
import "./Pokedex.css"
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex(){

  const [searchTerm, setSearchTerm] = useState('');
  
    return(
        <div className="pokedex-wrapper">
          <Search updateSearchTerm = {setSearchTerm}/>

          {(!searchTerm.length) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName= {searchTerm}/>}
        </div>
    )
}

export default Pokedex;