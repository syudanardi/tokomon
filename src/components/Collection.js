import React, {useState, useEffect} from "react";
import { Card } from 'components/Card'
import trashIcon from 'images/trashcan.png';
import renameIcon from 'images/rename.png';
import {style} from 'components/css/CommonStyle';
import {utility} from 'Utility/Utility';
import 'components/css/Collection.css';

export const Collection = (props) => {
  const {myPokemons, removePokemon, editPokemon} = props.state
  let ownedPokemonType = Object.keys(myPokemons)
  let list = [];
  let count = 0;

  for (let owned of ownedPokemonType) {
    list = list.concat(myPokemons[owned].names.map((name)=>{
      return {species: owned, name, image: myPokemons[owned].image}
    }))
  }

  return (
    <React.Fragment>
        <div className='flex flex-horizontal gap-6 flex-wrap justify-center'>
          {list.map((pokemon)=>{
            return (
            <div className={style.cardBorder} key={count++}>
              
              <div className="collection-card">
                <Card object={{name:pokemon.name, image:pokemon.image}}/>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="collection-action-container"
                onClick={()=>{utility.renamePokemon(editPokemon, pokemon.species, pokemon.name)}}>
                  <img src={renameIcon} alt="Rename Icon" className="collection-action-button"/>
                </div>
                <div className="collection-action-container"
                onClick={()=>{utility.releasePokemon(removePokemon, pokemon.species, pokemon.name)}}>
                  <img src={trashIcon} alt="Trash Icon" className="collection-action-button"/>
                </div>
              </div>
              
            </div>)})}
        </div>
    </React.Fragment>
  );
};