import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const utility = 
  {
    catchPokemon: (catchFunction, pokemons, pokemon, nickName, image)=>{
      const pokemonName = capitalize(pokemon);
      const isNew = !Boolean(pokemons[pokemon]);
      const currentNames = (isNew ? [] : pokemons[pokemon].names);
      const newName = nickName.trim().replace(/\s\s+/g, ' ').toLowerCase();
      console.log(newName);

      if (currentNames.includes(newName)) {
        MySwal.fire({
          title: <p>Already have {pokemonName} with {capitalize(newName)} name</p>,
          icon: 'error',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Oops..."
        })
        return false;
      } else {
        MySwal.fire({
          icon:'success',
          title: <p>{capitalize(newName)} added to your Pokemon List!</p>,
          confirmButtonText: "Neat!"
        }).then(()=>{
          catchFunction({pokemon: pokemon, name: newName, image})
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
          maxLength: 12,
        },
        showCancelButton: true,
        confirmButtonText: 'Rename',
        preConfirm: (value) => {
          // eslint-disable-next-line
          if (value == "") {
            Swal.showValidationMessage(
              'name is required'
            )
          } else {
            const newName = value.trim().replace(/\s\s+/g, ' ').toLowerCase();
            if (currentNames.includes(newName.toLowerCase())) {
              Swal.showValidationMessage(
                `${capitalize(newName)} already used for this type of pokemon`
              )
            }
          }
        }
      },).then((result)=>{
        if (result.isConfirmed) {
          const newName = result.value.trim().replace(/\s\s+/g, ' ').toLowerCase();
          editFunction({pokemon, name, newName: newName});
          MySwal.fire(
            'Renamed!',
            `${capitalize(name)} has been renamed to ${capitalize(newName)}`,
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