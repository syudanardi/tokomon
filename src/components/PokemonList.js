import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/client';
import {PokemonCard} from 'components/PokemonCard'
import { Link } from 'react-router-dom';

import {GET_POKEMONS} from 'api/pokemon'

export const PokemonList = () => {
  const [limit, setLimit] = useState(24)
  const [pokemonsData, setPokemonsData] = useState([])
  let offSet = 0
  const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {limit: limit, offset: offSet}})

  useEffect(() => {
    if (!loading) {
      setPokemonsData(data.pokemons.results);
    }
  }, [limit, loading, pokemonsData]);
  let pokemons = [];

  // function getPokemons() {
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;
  //   return(
       
  //   )
  // }

  function loadMore() {
    setLimit(limit + 24);
  }

  return (
    <React.Fragment>
      <div class="mt-10 flex items-center justify-center"> 
         <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {pokemonsData.map((pokemon)=>{
            return (
              <Link to={`/pokemon-details/${pokemon.name}`}>
                <PokemonCard pokemon={pokemon}/>
              </Link>
            )
          })}
        </div>
      </div>
      <button onClick={()=>{loadMore()}}>
        Load More
      </button>
    </React.Fragment>
  );
};