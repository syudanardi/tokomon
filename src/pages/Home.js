import React, { useContext } from "react";
import {PokemonList} from "components/PokemonList";
import { GlobalContext } from 'context/GlobalState';

export const Home = () => {
  const { loaded, loadPokemon } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-7xl mb-4">
        <h3 className="text-center text-3xl mt-24 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Pokemon Shopping App
        </h3>
        <PokemonList state={{loaded, loadPokemon}}/>
      </div>
    </React.Fragment>)
}