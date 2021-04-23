import React from "react";
import { useQuery } from '@apollo/client';
import {GET_POKEMON} from 'api/pokemon'
import {PokemonCard} from 'components/PokemonCard';
import {Card} from 'components/Card';


export const Details = (prop) => {
  const {name} = prop;
  const {loading, error, data} = useQuery(GET_POKEMON, {variables: {name:name}})

  function getPokemon() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
      return(
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div class="col-span-1 md:col-span-1 justify-self-center">
            <img
              src={data.pokemon.sprites.front_default}
              className="bg-gray-300 w-auto h-40 object-cover rounded-full mx-auto shadow-lg"
              alt={data.pokemon.name}
            />
            <p className="text-lg font-semibold my-4 capitalize">{data.pokemon.name}</p>
            
          </div>
          <div class="col-span-1 md:col-span-3">
            xxxx
          </div>
        </div>
        
    )
  }

  return getPokemon();
}