import React, {useContext} from "react";
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from 'api/pokemon'
import { Pill } from 'components/Pill';
import { GlobalContext } from 'context/GlobalState';
import pokeball from 'images/green-tpb.png';
import openPokeball from 'images/green-tpbo.png';
import 'components/css/Details.css';

export const Details = (prop) => {
  const {name, setCatching} = prop;
  const {loading, error, data} = useQuery(GET_POKEMON, {variables: {name:name}})
  const { pokemons, addPokemon } = useContext(GlobalContext);
  console.log(pokemons)

  function catchPokemon(pokemon, name) {
    setCatching({isCatching: true, pokemon, name})
    //addPokemon({pokemon, name});
  }

  function getPokemon() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      return(
        <div className="grid grid-cols-1 divide-y-2 gap-4 lg:grid-cols-4 lg:divide-x-2 lg:divide-y-0 space-y-2">
          <div className="col-span-1 lg:col-span-1 justify-self-center">
            <img
              src={data.pokemon.sprites.front_default}
              className="bg-gray-300 w-auto h-40 object-cover rounded-full mx-auto shadow-lg"
              alt={data.pokemon.name}
            />
            <p className="text-lg font-semibold my-4 capitalize">{data.pokemon.name}</p>
            <div className="flex flex-row justify-start font-semibold h-24 justify-center">
              {data.pokemon.types.map((type)=>{
                let typeName = type.type.name;
                return <Pill style="mx-4 "  text={typeName} color={{bg:typeName}}></Pill>
              })}
            </div>
            <div className="floating-button" onClick={()=>{catchPokemon(data.pokemon.name, "Arjuna")}}>
              <div className="pokeball-button">
                <img className="mx-auto lg:h-24 pokeball-img" src={pokeball}/>
                <img className="mx-auto lg:h-24 pokeball-img" src={openPokeball}/>
              </div>
              <p className="w-auto">Catch</p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 lg:px-4">
            <div className="grid grid-row-2">
              <div className="row-span-1">
                <h3 className="font-bold text-4xl my-3 bg-green-300 rounded-md lg:pb-2">Owned</h3>
                <div className="flex flex-row flex-wrap justify-start font-semibold h-24 justify-center">
                  {pokemons[data.pokemon.name] ? pokemons[data.pokemon.name].map((owned)=>{
                    return <Pill style="mx-4 " text={owned}></Pill>
                  }) : <>None</>}
                </div>
              </div>
              <div className="row-span-1">
                <h3 className="font-bold text-4xl my-3 bg-green-300 rounded-md lg:pb-2">Moves</h3>
                <div className="flex flex-row flex-wrap justify-start font-semibold h-24 justify-center">
                  {data.pokemon.moves.map((move)=>{
                    return <Pill style="mx-2 h-12 flex-none" text={move.move.name}></Pill>
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