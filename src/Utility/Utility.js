import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const utility = 
  {
    catchPokemon: (catchFunction, pokemons, pokemon, nickName, image)=>{
      const pokemonName = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
      if (pokemons[pokemon] && pokemons[pokemon].names.includes(nickName)) {
        MySwal.fire({
          title: <p>Already have {pokemonName} with {nickName} name</p>,
          icon: 'error',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Oops..."
        })
        return false;
      } else {
        MySwal.fire({
          icon:'success',
          title: <p>{nickName} added to your Pokemon List!</p>,
          confirmButtonText: "Neat!"
        }).then(()=>{
          catchFunction({pokemon: pokemon, name: nickName, image})
        })
        return true;
      }
    },

    releasePokemon: (releaseFunction, pokemon, name) => {
      MySwal.fire({
        title: <p>Are you sure you want to release {name}?</p>,
        confirmButtonText: "Yes!",
        showCancelButton: "NO!!!",
        icon: 'warning',
      }).then((result)=>{
        if (result.isConfirmed) {
          releaseFunction({pokemon,name});
          MySwal.fire(
            'Released!',
            `${name} has been released! Bye~`,
            'success'
          )
        }
      })
    },

    renamePokemon: (editFunction, pokemon, name)=>{
      MySwal.fire({
        title: 'Enter new name',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Rename',
      }).then((result)=>{
        if (result.isConfirmed) {
          editFunction({pokemon, name, newName: result.value});
          MySwal.fire(
            'Renamed!',
            `${name} has been renamed to ${result.value}`,
            'success'
          )
        }
      })
    },

    reset: (resetFunction)=>{
      MySwal.fire({
        title: 'DELETE POKEMON COLLECTION',
        text: "Are you sure you want to delete your collections?",
        showCancelButton: true,
        confirmButtonTex: 'Yes'
      }).then((result)=>{
        if(result.isConfirmed) {
          resetFunction();
          MySwal.fire(
            'Deleted',
            'Your collection is empty now',
            'success'
          )
        }
      })
    }
  }