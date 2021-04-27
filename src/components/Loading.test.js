import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Home', () => {
  test('renders Home component', () => {
    render(
      <Loading/>
    );
  });
});