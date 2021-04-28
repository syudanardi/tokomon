import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from 'components/Loading';
import PikaSearch from 'images/pika-search.png'

describe('Loading', () => {
  test('renders Loading component', () => {
    render(
      <Loading/>
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', PikaSearch);

    const text = screen.getByText(/L O A D I N G/i);
    expect(text).toBeInTheDocument();
  });
});