import React, {useContext} from "react";
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from 'api/pokemon'
import {Loading} from 'components/Loading';
import pokeball from 'images/green-tpb.png';
import openPokeball from 'images/green-tpbo.png';
import 'components/css/Details.css';
import {utility} from 'Utility/Utility'
import { GlobalContext } from 'context/GlobalState';

export const Details = (prop) => {
  const { pokemons, removePokemon } = useContext(GlobalContext);
  const { name, setCatching } = prop.state;
  const {loading, error, data} = useQuery(GET_POKEMON, {variables: {name:name}})

  function catchPokemon(pokemon, image) {
    setCatching({isCatching: true, pokemon, image})
  }

  function getPokemon() {
    if (loading) return <div className="loading-container"><Loading/></div>;
    if (error) return <p>Error loading graphql: {error}</p>;
      return(
        <div className="grid grid-cols-1 divide-y-2 gap-4 md:grid-cols-4 lg:grid-cols-4 md:divide-x-2 md:divide-y-0 space-y-2">
          <div className="col-span-1 justify-self-center">
            <img
              src={data.pokemon.sprites.front_default}
              className="bg-gray-300 w-auto h-40 object-cover rounded-full mx-auto shadow-lg"
              alt={data.pokemon.name}
            />
            <p className="text-lg font-semibold my-4 capitalize">{data.pokemon.name}</p>
            <div className="flex flex-row justify-start font-semibold h-24 justify-center">
              {data.pokemon.types.map((type)=>{
                let typeName = type.type.name;
                return <span className={`mx-4 flex items-center border rounded-full w-24 justify-center mt-2 mb-12 bg-${typeName}`}>
                  {typeName}</span>
              })}
            </div>
            <div className="floating-button" onClick={()=>{catchPokemon(data.pokemon.name, data.pokemon.sprites.front_default)}}>
              <div className="pokeball-button">
                <img className="mx-auto lg:h-24 pokeball-img" src={pokeball} alt="pokeball"/>
                <img className="mx-auto lg:h-24 pokeball-img" src={openPokeball} alt="open pokeball"/>
              </div>
              <p className="w-auto">Catch</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 md:px-4">
            <div className="grid grid-row-2">
              <div className="row-span-1">
                <h3 className="font-bold text-4xl my-3 bg-green-300 rounded-md lg:pb-2">Owned</h3>
                <div className="flex flex-row flex-wrap justify-start font-semibold h-24 justify-center">
                  {pokemons[data.pokemon.name] && pokemons[data.pokemon.name].names.length > 0 ? pokemons[data.pokemon.name].names.map((owned)=>{
                    return (
                      <div onClick={()=>{utility.releasePokemon(removePokemon, data.pokemon.name, owned)}}>
                        <span className={`mx-4 h-12 hover:bg-red-500 hover:text-white flex items-center border rounded-full w-24 justify-center mt-2 mb-12`}>
                        {owned}</span>
                      </div>
                    )
                  }) : <>None</>}
                </div>
              </div>
              <div className="row-span-1">
                <h3 className="font-bold text-4xl my-3 bg-green-300 rounded-md lg:pb-2">Moves</h3>
                <div className="flex flex-row flex-wrap justify-start font-semibold h-auto justify-center last-element">
                  {data.pokemon.moves.map((move)=>{
                    return <span className={`mx-2 h-12 flex-none flex items-center border rounded-full w-24 justify-center mt-2 mb-12`}>
                      {move.move.name}</span>
                  })}
                </div>
              </div>
            </div>
            
          </div>
        </div> 
    )
  }

  return getPokemon();
}