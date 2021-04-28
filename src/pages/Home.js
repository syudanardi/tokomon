import React from "react";
import {PokemonList} from "components/PokemonList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-7xl mb-4">
        <h3 className="page-title text-center text-3xl mt-2 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Pokemon Shopping App V1.1
        </h3>
        <PokemonList/>
      </div>
    </React.Fragment>)
}