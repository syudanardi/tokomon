import React from "react";
import { Card } from 'components/Card'
import trashIcon from 'images/trashcan.png';
import renameIcon from 'images/rename.png';
import {style} from 'components/css/CommonStyle';
import {utility} from 'Utility/Utility';
import { Link } from 'react-router-dom';
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
        <div className='mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
          {list.map((pokemon)=>{
            return (
            <div className={style.cardBorder} key={count++}>
              
              <div className="collection-card">
                <Link to={`/pokemon-details/${pokemon.species}`}>
                  <Card object={{name:pokemon.name, image:pokemon.image}}/>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="collection-action-container"
                onClick={()=>{utility.renamePokemon(myPokemons[pokemon.species].names, editPokemon, pokemon.species, pokemon.name)}}>
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