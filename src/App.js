import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/client/react';

import { GlobalProvider } from './context/GlobalState';
import { Home } from './pages/Home';
import { PokemonDetails } from './pages/PokemonDetails';
import { EditEmployee } from './components/EditEmployee';


const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';
const client = new ApolloClient({ uri });

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <div className="App mx-2">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/pokemon-details/:name" component={PokemonDetails} exact />
            <Route path="/edit/:id" component={EditEmployee} exact />
          </Switch>
        </div>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
