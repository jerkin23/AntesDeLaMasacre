import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VerificationCode from './VerificationCode';

describe('<VerificationCode />', () => {
  test('it should mount', () => {
    render(<VerificationCode />);
    
    const verificationCode = screen.getByTestId('VerificationCode');

    expect(verificationCode).toBeInTheDocument();
  });
});