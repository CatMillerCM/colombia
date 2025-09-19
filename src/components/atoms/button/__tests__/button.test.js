import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../index';

describe('Button', () => {
  const renderButton = (playerCount) => {
    render(
      <Button
        playerCount={playerCount}
        useRemainder={true}
      />);
    return screen.getByRole('button', { name: /distribute ball numbers/i });
  };

  it('should render a button with correct text', () => {
    const button = renderButton(2);

    expect(button).toBeInTheDocument();
  });

  it('should be enabled when playerCount is truthy', () => {
    const button = renderButton(2);

    expect(button).not.toBeDisabled();
  });

  it('should be disabled when playerCount is falsy', () => {
    const button = renderButton("");

    expect(button).toBeDisabled();
  });
});
