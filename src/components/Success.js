import React, {useState} from "react";
import pokeball from "images/green-tpb.png";
import Swal from 'sweetalert2'
import {style} from "components/css/CommonStyle";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Success = (props)=>{
  const { catching, setCatching, pokemons, addPokemon, goBack} = props.state;
  const [nickName, setNickName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const pokemonName = catching.pokemon.charAt(0).toUpperCase() + catching.pokemon.slice(1);
    if (pokemons[catching.pokemon] && pokemons[catching.pokemon].includes(nickName)) {
      MySwal.fire({
        title: <p>Already have {pokemonName} with {nickName} name</p>,
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Oops..."
      })
      return
    } else {
      MySwal.fire({
        icon:'success',
        title: <p>{nickName} added to your Pokemon List!</p>,
        confirmButtonText: "Neat!"
      }).then((result)=>{
        addPokemon({pokemon: catching.pokemon, name: nickName})
        setCatching({isCatching: false})
      })
    }
    // MySwal.fire({
    //   title: <p>You already have </p>,
    //   confirmButtonText: `Reset`,
    //   showCancelButton: true,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire('Data reset to initial value!', '', 'success');
    //     reset();
    //   }
    // })
    return
  }

  function changeHandler(event) {
    setNickName(event.target.value)
  }

  return (
    <div className={style.container}>
      <div>
        <div>
          <p className="catching-text">{catching.pokemon} captured</p>
        </div>
        <div className="row-span-1 catching-img-container">
          <img className="catching-pokeball" src={pokeball}></img>
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
          <button onClick={()=>{goBack()}}>Release Instead</button>
        </div>
      </div>
    </div>
  )
}