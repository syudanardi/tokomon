import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import App from 'App';
import { Router } from 'react-router-dom'
import Logo from 'images/tokomon-logo.png'
import GrassIcon from 'images/grass.png'
import HomeIcon from  'images/home.png'
import DeleteIcon from 'images/delete.png'

describe('App', () => {
  const history = createMemoryHistory()
  test('renders App component', () => {
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

  test('renders Navbar properly', () => {
    render(
      <Router history={history}>
        <App />
      </Router>);

    const logo = screen.getAllByRole('img');
    expect(logo.length).toBeGreaterThan(0);
    let images = []
    logo.forEach((htmlElement)=>{
      let keys = Object.keys(htmlElement);
      images.push(htmlElement[keys[1]].src)
    })

    let toCheck = [GrassIcon, HomeIcon, Logo, DeleteIcon];
    toCheck.forEach((image) => {
      expect(images).toContain(image)
    })
  })
  
});