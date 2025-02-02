import { useState } from "react";
import "./Search.css"
import useDebounce from "../../hooks/useDebounce";

function Search({updateSearchTerm}) {

  const debounceCallback = useDebounce((e) => updateSearchTerm(e.target.value))
    return(
        <div className="search-wrapper">
          <input 
            id="pokedex-name-search"
            type="text"
            placeholder="Pokemon name..."
            onChange={debounceCallback}
          />
        </div>
    )
}

export default Search;