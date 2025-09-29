import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RevealButton from '..';

describe('RevealButton', () => {
  const setNumbersMock = jest.fn();

  describe('when clicked', () => {
    const numbers = [];
    const distributions = { playerPots: [[1, 2], [3, 4], [5]], discarded: [5] };
    const step = 2;

    beforeEach(() => {
      render(<RevealButton
        numbers={numbers}
        setNumbers={setNumbersMock}
        distributions={distributions}
        step={step}
      />);

      const button = screen.getByRole('button', { name: /reveal player 2's numbers/i });
      fireEvent.click(button);
    });

    it('should call setNumbers with the correct player\'s numbers', () => {
      expect(setNumbersMock).toHaveBeenCalledWith([3, 4]);
    });
  });
});
