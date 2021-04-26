import React, { createContext, useReducer, useEffect } from 'react';

import appReducer from 'context/AppReducer';

let initialState = {
  pokemons: {},
  loaded: {}
};

function validate(pokemons) {
  let keys = Object.keys(pokemons);
  for(let key of keys) {
    if (typeof pokemons[key] != 'object') {
      return false
    }
    if (!pokemons[key].hasOwnProperty('image')) {
      return false
    }
    return true
  }
}
  
function getLocalStorage(key, initialValue) {
    try {
        const value = JSON.parse(window.localStorage.getItem(key));
        if (value && value.hasOwnProperty('pokemons')){
          if (validate(value.pokemons)) {
            return {pokemons: value.pokemons, loaded: {}};
          }
        }
        return initialValue

    } catch (e) {
        // if error, return initial value
        return initialValue;
    }
}

function setLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // catch possible errors:
        // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
}

const currentState = getLocalStorage('tokomonState', initialState)

export const GlobalContext = createContext(currentState);
  

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, currentState);

  useEffect(() => {
    setLocalStorage("tokomonState", {pokemons: state.pokemons});
  }, [state]);

  /**
   * Catch a pokemon
   * @param {{pokemon:string, name:string}} pokemon name is nickname, pokemon is species
   */
  function addPokemon(pokemon) {
    dispatch({
      type: "ADD_POKEMON",
      payload: pokemon
    });
  }

  /**
   * Edit a pokemon name
   * @param {{pokemon:string, name:string, newName:string}} pokemon newName is new nickname, name is nickname, pokemon is species
   */
  function editPokemon(pokemon) {
    dispatch({
      type: "EDIT_POKEMON",
      payload: pokemon
    });
  }

  function removePokemon(pokemon) {
    dispatch({
      type: "REMOVE_POKEMON",
      payload: pokemon
    });
  }

  function reset() {
      dispatch({
          type: "RESET",
          payload: initialState
      })
  }

  return (
    <GlobalContext.Provider
      value={{
        pokemons: state.pokemons,
        addPokemon,
        editPokemon,
        removePokemon,
        reset
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};