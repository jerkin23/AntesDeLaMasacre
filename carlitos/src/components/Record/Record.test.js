import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Record from './Record';

describe('<Record />', () => {
  test('it should mount', () => {
    render(<Record />);
    
    const record = screen.getByTestId('Record');

    expect(record).toBeInTheDocument();
  });
});