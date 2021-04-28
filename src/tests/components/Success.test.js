import React from 'react';
import { render, screen } from '@testing-library/react';
import { Success } from 'components/Success';
import { GlobalProvider } from 'context/GlobalState';
import pokeball from "images/green-tpb.png";

describe('Success component', () => {
  let catching = {isCatching: true, pokemon: 'ivysaur'};
    const setCatching = (newVal)=>{
      catching = newVal;
    } 
    const goBack = ()=>{
      setCatching({isCatching: false});
    }
  test('renders Success component', () => {
    render(
      <GlobalProvider>
        <Success state={{catching, setCatching, goBack}}/>
      </GlobalProvider>
    );

    const linkElement = screen.getByPlaceholderText(/enter unique name/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders pokeball image', () =>{

    render(
      <GlobalProvider>
        <Success state={{catching, setCatching, goBack}}/>
      </GlobalProvider>
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', pokeball);
  })
});