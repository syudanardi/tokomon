import React, { createContext, useReducer, useEffect } from 'react';

import appReducer from 'context/AppReducer';

let initialState = {
  pokemons: {
    charmander: ['Rizky', 'Ajeng'],
    bulbasaur: ['Mas Eko', 'Puput']
  }
};
  
function getLocalStorage(key, initialValue) {
    try {
        const value = window.localStorage.getItem(key);
        if (JSON.parse(value).hasOwnProperty('pokemon')){
          return value ? JSON.parse(value) : initialValue;
        } else {
          return initialValue
        }
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
    setLocalStorage("tokomonState", state);
  }, [state]);

  function addPokemon(pokemon) {
    dispatch({
      type: "ADD_POKEMON",
      payload: pokemon
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
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
        editEmployee,
        removeEmployee,
        reset
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};