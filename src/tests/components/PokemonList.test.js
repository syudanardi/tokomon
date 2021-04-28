import React from 'react';
import { render, screen } from '@testing-library/react';
import { PokemonList } from 'components/PokemonList';
import { GlobalProvider } from 'context/GlobalState';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';

describe('PokemonList component', () => {
  test('renders PokemonList component', () => {

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