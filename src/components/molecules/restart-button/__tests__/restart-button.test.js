import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RestartButton from '..';

describe('RestartButton', () => {
  const setStepMock = jest.fn();

  describe('when clicked', () => {
    beforeEach(() => {
      render(<RestartButton
        setStep={setStepMock}
      />);

      const button = screen.getByRole('button', { name: /restart/i });
      fireEvent.click(button);
    });

    it('should call setStep with "entry"', () => {
      expect(setStepMock).toHaveBeenCalledWith('entry');
    });
  });
});
