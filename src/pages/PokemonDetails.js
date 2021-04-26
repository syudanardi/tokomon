import React, {useState, useContext} from "react";
import {Details} from "components/Details";
import {Catching} from "components/Catching";
import { GlobalContext } from 'context/GlobalState';

export const PokemonDetails = (route) => {
  const { pokemons, addPokemon, removePokemon } = useContext(GlobalContext);
  const name = route.match.params.name;
  const [catching, setCatching] = useState({isCatching: false})
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-7xl mb-4">
        <h3 className="text-center text-3xl mt-24 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Pokedex Entry For {name}
        </h3>
        {catching.isCatching ? <Catching state={{catching, setCatching, pokemons, addPokemon}}></Catching> :
        <Details state={{name, setCatching, pokemons, removePokemon}} ></Details>
        }
      </div>
    </React.Fragment>)
}