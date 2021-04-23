import React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }`
  

export const PokemonList = () => {
  const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {limit: 20, offset:0}})
  function getPokemon() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return(
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12">
          {data.pokemons.results.map((pokemon)=>{
            return <img
              src={pokemon.image}
              className="card-img"
              alt={pokemon.name}
            />
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