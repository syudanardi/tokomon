import React from 'react';
import { render, screen } from '@testing-library/react';
import { PokemonList } from './PokemonList';
import { GlobalProvider } from 'context/GlobalState';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';

describe('Home', () => {
  test('renders Home component', () => {

    const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';
    const client = new ApolloClient({ uri });
   
    render(
      <GlobalProvider>
        <ApolloProvider client={client}>
          <PokemonList/>
        </ApolloProvider>
      </GlobalProvider>
    );
  });
});