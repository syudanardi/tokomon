import React, { useContext } from 'react';
import {Card} from 'components/Card'

import { GlobalContext } from 'context/GlobalState';

export const PokemonCard = ({pokemon}) =>{
  const { pokemons } = useContext(GlobalContext);
  let count = (pokemons[pokemon.name] !== undefined ? pokemons[pokemon.name].length : 0);
  return(
    <div class="bg-blue-300 py-8 px-10 text-center rounded-md shadow-lg max-w-xs mx-auto">
      <Card object={pokemon}/>
      <span class="bg-white flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
        {count!==0 ? <div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div> : <div class="bg-red-400 rounded-full w-2.5 h-2.5 block mr-2"></div>}
        Owned: {count}
      </span>
    </div>
  )
} 