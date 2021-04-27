import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';
import { GlobalProvider } from 'context/GlobalState';
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

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
      <GlobalProvider>
        <Router history={history}>
          <Route path={path} component={ui} />
        </Router>
      </GlobalProvider>
    )
  };
}

describe('PokemonDetails', () => {
  test('renders PokemonDetails component', () => {

    renderWithRouterMatch(Navbar, {
      route: "/",
      path: "/"
    })
  });
});