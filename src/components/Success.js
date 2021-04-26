import React, {useState} from "react";
import pokeball from "images/green-tpb.png";
import {style} from "components/css/CommonStyle";
import {utility} from 'Utility/Utility';

export const Success = (props)=>{
  const { catching, setCatching, pokemons, addPokemon, goBack} = props.state;
  const [nickName, setNickName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (utility.catchPokemon(addPokemon,pokemons, catching.pokemon, nickName, catching.image)) {
      setCatching({isCatching: false})
    }
  }

  function changeHandler(event) {
    setNickName(event.target.value)
  }

  return (
    <div className={style.container + " success-container"}>
      <div>
        <div>
          <p className="catching-text">{catching.pokemon} captured</p>
        </div>
        <div className="row-span-1 py-6 catching-img-container">
          <img className="catching-pokeball" src={pokeball} alt="Catching-Pokeball"></img>
        </div>
        <div>
            <form onSubmit={handleSubmit} class="m-4 flex">
              <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" 
                type="text"
                value={nickName}
                onChange={changeHandler}
                required
                placeholder="enter unique name"/>
                <button class="px-8 rounded-r-lg bg-green-400 text-white font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">KEEP</button>
            </form>
        </div>
        <div>
          <button className="release-button" onClick={()=>{goBack()}}>Release Instead</button>
        </div>
      </div>
    </div>
  )
}