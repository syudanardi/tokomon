import React from 'react';
import { render, screen } from '@testing-library/react';
import { Success } from './Success';
import { GlobalProvider } from 'context/GlobalState';

describe('Home', () => {
  test('renders Home component', () => {
    let catching = {isCatching: true, pokemon: 'ivysaur'};
    const setCatching = (newVal)=>{
      catching = newVal;
    } 
    const goBack = ()=>{
      setCatching({isCatching: false});
    }
    render(
      <GlobalProvider>
        <Success state={{catching, setCatching, goBack}}/>
      </GlobalProvider>
    );
  });
});