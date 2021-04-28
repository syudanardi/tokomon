import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from 'pages/Home';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';

describe('Home', () => {
  test('renders Home page', () => {
    const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';
    const client = new ApolloClient({ uri });

    render(
      <ApolloProvider client={client}>\
        <Home />
      </ApolloProvider>
    );

    const linkElement = screen.getByText(/POKEMON SHOPPING APP/i);
    expect(linkElement).toBeInTheDocument();
  });
});