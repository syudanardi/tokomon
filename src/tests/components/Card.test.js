import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from "components/Card"

describe('Card', () => {
  test('renders Card component', () => {
    const pokemon = {
      "name": "spearow",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    }
    render(
      <Card object={pokemon}/>
    );
    const text = screen.getByText(/spearow/i);
    expect(text).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png");
  });
});