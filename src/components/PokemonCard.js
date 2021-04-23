import React, { useContext } from 'react';
import {Card} from 'components/Card'

import { GlobalContext } from 'context/GlobalState';
const {style} = require('components/css/PokemonCard')

export const PokemonCard = ({pokemon}) =>{
  const { pokemons } = useContext(GlobalContext);
  let count = (pokemons[pokemon.name] !== undefined ? pokemons[pokemon.name].length : 0);
  return(
    <div class={style.cardBorder}>
      <Card object={pokemon}/>
      <span class={style.ownedFrame}>
        Owned: {count}
      </span>
    </div>
  )
}