import React from 'react';
import { render, screen } from '@testing-library/react';
import { Catching } from 'components/Catching';

describe('Home', () => {
  test('renders Home component', () => {
    const catching = {isCatching: true, pokemon: "ivysaur"}
    const setCatching = ()=>{};
    render(
      <Catching state={{catching, setCatching}}/>
    );
  });
});