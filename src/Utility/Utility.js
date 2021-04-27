import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const nameRegex = new RegExp('\\S{1,25}', 'g'); //at least 1 valid char

export const utility = 
  {
    catchPokemon: (catchFunction, pokemons, pokemon, nickName, image)=>{
      const pokemonName = capitalize(pokemon);
      if ((pokemons[pokemon] && pokemons[pokemon].names.includes(nickName.toLowerCase())) || !nameRegex.test(nickName)) {
        
        const title = (pokemons[pokemon].names.includes(nickName.toLowerCase()) ? 
        <p>Already have {pokemonName} with {capitalize(nickName)} name</p> :
        <p>Please use atleast 1 non-space character</p>)

        MySwal.fire({
          title: title,
          icon: 'error',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Oops..."
        })
        return false;
      } else {
        MySwal.fire({
          icon:'success',
          title: <p>{capitalize(nickName)} added to your Pokemon List!</p>,
          confirmButtonText: "Neat!"
        }).then(()=>{
          catchFunction({pokemon: pokemon, name: nickName.toLowerCase(), image})
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

    renamePokemon: (currentNames, editFunction, pokemon, name)=>{
      MySwal.fire({
        title: 'Enter new name',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
          maxlength: 12
        },
        showCancelButton: true,
        confirmButtonText: 'Rename',
        preConfirm: (value) => {
          if (!value || !nameRegex.test(value)) {
            Swal.showValidationMessage(
              'name is required'
            )
          }
          if (currentNames.includes(value.toLowerCase())) {
            Swal.showValidationMessage(
              `${capitalize(value)} already used for this type of pokemon`
            )
          }
        }
      },).then((result)=>{
        if (result.isConfirmed) {
          editFunction({pokemon, name, newName: result.value.toLowerCase()});
          MySwal.fire(
            'Renamed!',
            `${capitalize(name)} has been renamed to ${capitalize(result.value)}`,
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