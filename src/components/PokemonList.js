import React, {useState, useEffect, useContext} from "react";
import { useQuery } from '@apollo/client';
import {Card} from 'components/Card'
import { Link } from 'react-router-dom';
import PikaWave from 'images/pika-wave.png';
import {Loading} from 'components/Loading';
import {GET_POKEMONS} from 'api/pokemon'
import { GlobalContext } from 'context/GlobalState';
const {style} = require('components/css/CommonStyle')

export const PokemonList = () => {
  const {loaded, loadPokemon, pokemons } = useContext(GlobalContext);
  const limit = 12;
  let offset = loaded.length
  const [loadTrigger, setLoadTrigger] = useState(loaded.length === 0 ? true: false)
  const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {limit: limit, offset: offset}})
  const MAX_POKEMON = 1117;

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
            let count = (pokemons[pokemon.name] !== undefined ? pokemons[pokemon.name].names.length : 0);
            return (
              <Link to={`/pokemon-details/${pokemon.name}`} key={pokemon.id}>
                <div className={style.cardBorder}>
                  <Card object={pokemon}/>
                  <span className={style.ownedFrame}>
                    Owned: {count}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {loading ? 
      <div className="loading-container">
        <Loading extraClass={""}/> 
      </div> : loaded.length < MAX_POKEMON ?
      <div className="loading-container" onClick={()=>{loadMore()}}>
        <img className="loading-image" src={PikaWave} alt="waving pikachu"></img>
        <p className="loading-text">LOAD MORE</p>
      </div> : null
      }
    </React.Fragment>
  );
};