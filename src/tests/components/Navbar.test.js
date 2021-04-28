import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';
import { GlobalProvider } from 'context/GlobalState';
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import Logo from 'images/tokomon-logo.png'
import GrassIcon from 'images/grass.png'
import HomeIcon from  'images/home.png'
import DeleteIcon from 'images/delete.png'

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

describe('Navbar', () => {
  test('renders Navbar component properly', () => {

    renderWithRouterMatch(Navbar, {
      route: "/",
      path: "/"
    })

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
  });
});