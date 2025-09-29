import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NextPlayerButton from '..';

describe('NextPlayerButton', () => {
  const setNumbersMock = jest.fn();
  const setStepMock = jest.fn();

  describe('when clicked', () => {
    const step = 2;

    beforeEach(() => {
      render(<NextPlayerButton
        setNumbers={setNumbersMock}
        setStep={setStepMock}
        step={step}
      />);

      const button = screen.getByRole('button', { name: /next player/i });
      fireEvent.click(button);
    });

    it('should call setNumbers with an empty array', () => {
      expect(setNumbersMock).toHaveBeenCalledWith([]);
    });

    it('should call setStep with step + 1', () => {
      expect(setStepMock).toHaveBeenCalledWith(step + 1);
    });
  });
});
