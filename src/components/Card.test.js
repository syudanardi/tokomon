import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from "components/Card"

describe('Home', () => {
  test('renders Home component', () => {
    const pokemon = {
      "name": "spearow",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    }
    render(
      <Card object={pokemon}/>
    );
  });
});