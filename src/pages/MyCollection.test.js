import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyCollection } from './MyCollection';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';

describe('MyCollection', () => {
  test('renders MyCollection component', () => {
    const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';
    const client = new ApolloClient({ uri });

    render(
      <ApolloProvider client={client}>\
        <MyCollection />
      </ApolloProvider>
    );
  });
});