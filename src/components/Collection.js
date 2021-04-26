import React, {useState, useEffect} from "react";
import { Card } from 'components/Card'
import { Link } from 'react-router-dom';
import 'components/css/Collection.css';

export const Collection = (props) => {
  const {myPokemons, removePokemon} = props.state
  let ownedPokemonType = Object.keys(myPokemons)
  let list = [];
  let count = 0;

  for (let owned of ownedPokemonType) {
    list = list.concat(myPokemons[owned].names.map((name)=>{
      return {pokemon: owned, name, image: myPokemons[owned].image}
    }))
  }

  return (
    <React.Fragment>
        <div className='flex flex-horizontal gap-6 flex-wrap justify-center'>
          {list.map((pokemon)=>{
            return (<div className="card-container max-w-28" key={count++}>
              <div className="collection-card">
                <Card object={{name:pokemon.name, image:pokemon.image}}/>
              </div>
            </div>)})}
        </div>
    </React.Fragment>
  );
};