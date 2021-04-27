import React from 'react';
import { render, screen } from '@testing-library/react';
import {Collection} from 'components/Collection';
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const myPokemons = {
  "ivysaur": {
      "names": [
          "yanti"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  "fearow": {
      "names": [
          "joni"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  "arbok": {
      "names": [
          "romi"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  }
}

const removePokemon = ()=>{};
const editPokemon = ()=>{};
const state = {myPokemons, removePokemon, editPokemon}

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {

  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={withProps(Collection, {state: state})} />
      </Router>
    )
  };
}


describe('Home', () => {
  test('renders Collection component correctly', () => {

    renderWithRouterMatch(Collection,
      {
        route: "/collection",
        path: "/collection"
      }
    )

    const findInArray = ["yanti", "joni", "romi"]
    findInArray.forEach((item)=>{
      let regex = new RegExp(item, "i");
      expect(screen.getByText(regex)).toBeInTheDocument()
    })
  });
});