import { Routes, Route, Form } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";
import "./CustomRoutes.css";


function CustomRoutes(){
        return(
            
            <Routes>
            <Route path="/" element= {<Pokedex />}/>
            <Route path="/pokemon/:id" element= {<PokemonDetails />}/>
        </Routes>
        );
}

export default CustomRoutes;