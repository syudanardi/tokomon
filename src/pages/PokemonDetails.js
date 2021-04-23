import React from "react";
import { Heading } from "components/Heading";
import {Details} from "components/Details";

export const PokemonDetails = (route) => {
  const name = route.match.params.name;
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-7xl mb-4">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Pokedex Entry For {name}
        </h3>
        <Heading/>
        <Details name={name}></Details>
      </div>
    </React.Fragment>)
}