import React from 'react';
import { render, screen } from '@testing-library/react';
import { Details } from 'components/Details';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';

describe('Details', () => {
  test('renders Details component', () => {
    const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';
    const client = new ApolloClient({ uri });
    
    render(
      <ApolloProvider client={client}>
        <Details state={{setCatching: ()=>{}, name:"ivysaur"}}/>
      </ApolloProvider>
    );
  });
});