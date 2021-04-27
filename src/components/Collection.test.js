import React from 'react';
import { render } from '@testing-library/react';
import {Collection} from './Collection';
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

describe('Home', () => {
  test('renders Home component', () => {
    const myPokemons = {
      "ivysaur": {
          "names": [
              "qwdwqdwq"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      },
      "metapod": {
          "0": "metapod",
          "names": []
      },
      "fearow": {
          "names": [
              "Spearow"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
      },
      "arbok": {
          "names": [
              "asdas"
          ],
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
      }
    }

    const removePokemon = ()=>{};
    const editPokemon = ()=>{};
    const state = {myPokemons, removePokemon, editPokemon}
    const history = createMemoryHistory({ initialEntries: ["/", "/collection"] })

    render(
      <Router history={history}>
        <Route path={'/collection'} component={()=>{<Collection state={state}/>}}/>
      </Router>
    )
  });
});