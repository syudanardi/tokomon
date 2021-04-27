import React, {useState, useContext, useEffect} from "react";
import {Collection} from "components/Collection";
import { GlobalContext } from 'context/GlobalState';

export const MyCollection = (route) => {
  const { pokemons, removePokemon, editPokemon } = useContext(GlobalContext);
  const [myPokemons, setMyPokemons] = useState({});

  useEffect(()=>{
    setMyPokemons(pokemons);
  }, [pokemons])

  return (
    <React.Fragment>
      <div className="container mx-auto max-w-7xl mb-4">
        <h3 className="text-center text-3xl mt-2 text-base leading-8 text-black font-bold tracking-wide uppercase">
          My Pokemons
        </h3>
        <Collection state={{myPokemons, removePokemon, editPokemon}} ></Collection>
      </div>
    </React.Fragment>)
}