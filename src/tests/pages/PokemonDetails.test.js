import React from 'react';
import { render, screen } from '@testing-library/react';
import { PokemonDetails } from 'pages/PokemonDetails';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

// test utils file
function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';
  const client = new ApolloClient({ uri });
  return {
    ...render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <Route path={path} component={ui} />
        </Router>
      </ApolloProvider>
    )
  };
}

describe('PokemonDetails', () => {
  test('renders PokemonDetails page', () => {

    renderWithRouterMatch(PokemonDetails, {
      route: "/pokemon-details/venusaur",
      path: "/pokemon-details/:name"
    })

    const linkElement = screen.getByText(/pokedex entry/i);
    expect(linkElement).toBeInTheDocument();
  });
});