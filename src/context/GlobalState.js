import React, { createContext, useReducer, useEffect } from 'react';

import appReducer from 'context/AppReducer';

let initialState = {
  pokemons: {},
  loaded: []
};

function validateLocal(pokemons) {
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
          if (validateLocal(value.pokemons)) {
            return {...initialValue, pokemons: value.pokemons};
          }
        }
        return initialValue

    } catch (e) {
        // if error, return initial value
        return initialValue;
    }
}

function getSessionStorage(key, state) {
  try {
      const value = JSON.parse(window.sessionStorage.getItem(key));
      if (Array.isArray(value)){
        return {...state, loaded: value}
      }
      return {...state, loaded: initialState.loaded}

  } catch (e) {
      // if error, return initial value
      return state;
  }
}

function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e)
        // catch possible errors:
        // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
}

function setSessionStorage(key, value) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e)
  }
}

const currentState = getSessionStorage('loadedPokemons', getLocalStorage('tokomonState', initialState))
export const GlobalContext = createContext(currentState);
  
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, currentState);

  useEffect(() => {
    setLocalStorage("tokomonState", {pokemons: state.pokemons});
  }, [state]);

  useEffect(()=>{
    setSessionStorage("loadedPokemons", state.loaded)
  }, [state])

  /**
   * Catch a pokemon, storing its nickname and sprite
   * @param {{pokemon:string, name:string, image:string}} pokemon image is url to pokemon sprite, name is nickname, pokemon is species
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

  /**
   * Remove a pokemon from your state.pokemon
   * @param {{pokemon:string, name:string}} pokemon name is nickname, pokemon is species
   */
  function removePokemon(pokemon) {
    dispatch({
      type: "REMOVE_POKEMON",
      payload: pokemon
    });
  }

  /**
   * Delete all entries in the collection
   */
  function reset() {
    dispatch({
        type: "RESET",
        payload: {...state, pokemons:{}}
    })
  }

  /**
   * Load array of pokemons into the session storage to prevent reloading pokemon lists
   * @param {[{id: Number, name: String}]} loaded array of pokemons
   */
  function loadPokemon(loaded) {
    dispatch({
      type: "LOAD_POKEMON",
      payload: loaded
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        pokemons: state.pokemons,
        loaded: state.loaded,
        addPokemon,
        editPokemon,
        removePokemon,
        reset,
        loadPokemon
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};