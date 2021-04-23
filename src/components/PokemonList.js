import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import {PokemonCard} from 'components/PokemonCard'

import {GET_POKEMONS} from 'api/pokemon'

export const PokemonList = () => {
  const [limit, setLimit] = useState(24)
  const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {limit: limit, offset:0}})

  function getPokemon() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {data.pokemons.results.map((pokemon)=>{
            return <PokemonCard pokemon={pokemon}/>
          })}
        </div>
      
    )
  }

  return (
    <React.Fragment>
      <div class="mt-10 flex items-center justify-center"> 
        {getPokemon()}
      </div>
    </React.Fragment>
  );
};