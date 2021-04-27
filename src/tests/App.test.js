import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import App from 'App';
import { Router } from 'react-router-dom'

describe('App', () => {
  test('renders App component', () => {
    const history = createMemoryHistory()
    
    render(
      <Router history={history}>
        <App />
      </Router>);

    const findInArray = ["POKEMON SHOPPING APP", "POKEMON LIST", "MY COLLECTION", "DELETE DATA"]
    findInArray.forEach((item)=>{
      let regex = new RegExp(item, "i");
      expect(screen.getByText(regex)).toBeInTheDocument()
    })
  });
});