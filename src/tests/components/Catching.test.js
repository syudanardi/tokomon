import React from 'react';
import { render, screen } from '@testing-library/react';
import { Catching } from 'components/Catching';
import pokeball from "images/green-tpb.png";

describe('Catching', () => {
  test('renders Catching component', () => {
    const catching = {isCatching: true, pokemon: "ivysaur"}
    const setCatching = ()=>{};
    render(
      <Catching state={{catching, setCatching}}/>
    );
    
    const findInArray = ["Catching", catching.pokemon]
    findInArray.forEach((item)=>{
      let regex = new RegExp(item, "i");
      expect(screen.getByText(regex)).toBeInTheDocument()
    })

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', pokeball);
  });
});