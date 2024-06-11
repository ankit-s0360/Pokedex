import axios from "axios";
import { useState, useEffect } from "react";

function usePokemonList(){
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList : [], 
        setIsLoading : true,
        pokedexUrl : 'https://pokeapi.co/api/v2/pokemon',
        prevUrl : '',
        nextUrl: ''
      });
    
        async function downloadPokemons(){
          setPokemonListState((state) => ({...state, setIsLoading: true}));
          const response = await axios.get(pokemonListState.pokedexUrl);  // this downloads the list of 20 pokemons
          // console.log(results);
          const pokemonResults = response.data.results;  // we get the array of pokemons from results
          setPokemonListState((state) => ({...state, prevUrl: response.data.previous}));
          // setNextUrl(response.data.next);
          setPokemonListState((state) => ({...state, nextUrl: response.data.next}));
        
          // iterating over the array of pokemons, and using their url, to create an array of promises
          // that will downkoad those 20 pokemons
          const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
          // passing that promise array to axios.all
          const pokemonData = await axios.all(pokemonResultPromise);
          
          // now iterate on the data of each pokemon, and extract the value of name, type, image, id
          const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return{
              name: pokemon.name,
              id: pokemon.id,
              image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
              type: pokemon.types
            }
          })
    
          setPokemonListState((state) => ({...state, pokemonList: pokeListResult}));
          setPokemonListState((state) => ({...state, setIsLoading: false}));

        }
    
        useEffect(() => {
          downloadPokemons();
        }, [pokemonListState.pokedexUrl]);

        return[pokemonListState, setPokemonListState];
}

export default usePokemonList;