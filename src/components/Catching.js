import React, {useState} from "react";
import pokeball from "images/green-tpb.png";
import openPokeball from "images/green-tpbo.png";
import {Success} from 'components/Success';
import {style} from "components/css/CommonStyle";
import "components/css/Catching.css";

export const Catching = (props) =>{
  const {catching, setCatching} = props.state
  const [loading, setLoading] = useState(true)
  let success = (Math.random()*10 > 5 ? true : true);
  if(loading) {
    setTimeout(()=>{setLoading(false)}, 1000);
  }
  function goBack(){
    setCatching({isCatching: false})
  }
  if (loading) {
    return(
      <div className={style.container}>
        <div>
          <div>
            <p className="catching-text">Catching {catching.pokemon}!!!</p>
          </div>
          <div className="row-span-1 catching-img-container pt-6 pb-24">
            <img className="pokeball-animated catching-pokeball" src={pokeball} alt="pokeball"></img>
          </div>
        </div>
      </div>
    )
  }
  if (success) {
    return (
      <Success state={{...props.state, goBack}}/>
    )
  }
  else {
    return (
      <div className={style.container}>
        <div>
          <div className="my-4">
            <span className="catching-text mx-4">{catching.pokemon} Fleed :(</span>
              <button
                onClick={()=>{goBack()}} 
                className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
          </div>
          <div className="row-span-1 catching-img-container">
            <img className="catching-pokeball" src={openPokeball} alt="open pokeball"></img>
          </div>
        </div>
      </div>
    )
  }
}