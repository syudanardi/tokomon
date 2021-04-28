import React, {useState} from "react";
import {Details} from "components/Details";
import {Catching} from "components/Catching";

export const PokemonDetails = (route) => {
  const name = route.match.params.name;
  const [catching, setCatching] = useState({isCatching: false})
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-7xl mb-4">
        <h3 className="page-title text-center text-3xl mt-2 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Pokedex Entry For {name}
        </h3>
        {catching.isCatching ? <Catching state={{catching, setCatching}}></Catching> :
        <Details state={{name, setCatching}} ></Details>
        }
      </div>
    </React.Fragment>)
}