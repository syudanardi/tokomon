import React, { useContext } from 'react';
import {Card} from 'components/Card'

import { GlobalContext } from 'context/GlobalState';
const {style} = require('components/css/CommonStyle')

export const PokemonCard = ({pokemon}) =>{
  const { pokemons } = useContext(GlobalContext);
  let count = (pokemons[pokemon.name] !== undefined ? pokemons[pokemon.name].names.length : 0);
  return(
    <div className={style.cardBorder}>
      <Card object={pokemon}/>
      <span className={style.ownedFrame}>
        Owned: {count}
      </span>
    </div>
  )
}