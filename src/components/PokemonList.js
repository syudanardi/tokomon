import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/client';
import {PokemonCard} from 'components/PokemonCard'
import { Link } from 'react-router-dom';
import PikaWave from 'images/pika-wave.png';
import {Loading} from 'components/Loading';
import {GET_POKEMONS} from 'api/pokemon'

export const PokemonList = (props) => {
  const {loaded, loadPokemon} = props.state
  const limit = 12;
  let offset = loaded.length
  const [loadTrigger, setLoadTrigger] = useState(loaded.length === 0 ? true: false)
  const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {limit: limit, offset: offset}})

  useEffect(() => {
    if (!loading && loadTrigger) {
      loadPokemon(data.pokemons.results);
      offset = loaded.length; // eslint-disable-line react-hooks/exhaustive-deps
      setLoadTrigger(false);
    }
  }, [loading, loadTrigger]) // eslint-disable-line react-hooks/exhaustive-deps

  function loadMore() {
    setLoadTrigger(true);
  }

  if(error) {
    return <p>Error Loading Pokemons from graphql</p>
  }

  return (
    <React.Fragment>
      <div className="mt-10 flex items-center justify-center"> 
         <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {loaded.map((pokemon)=>{
            return (
              <Link to={`/pokemon-details/${pokemon.name}`} key={pokemon.id}>
                <PokemonCard pokemon={pokemon}/>
              </Link>
            )
          })}
        </div>
      </div>
      {loading ? 
      <div className="loading-container">
        <Loading extraClass={""}/> 
      </div> :
      <div className="loading-container" onClick={()=>{loadMore()}}>
        <img className="loading-image" src={PikaWave} alt="waving pikachu"></img>
        <p className="loading-text">LOAD MORE</p>
      </div>
      }
    </React.Fragment>
  );
};