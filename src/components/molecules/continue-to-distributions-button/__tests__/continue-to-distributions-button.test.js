import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContinueToDistributionsButton from '..';

describe('ContinueToDistributionsButton', () => {
  const setStepMock = jest.fn();

  describe('when clicked', () => {
    beforeEach(() => {
      render(<ContinueToDistributionsButton
        setStep={setStepMock}
      />)

      const button = screen.getByRole('button', { name: /continue to player distributions/i });
      fireEvent.click(button);
    });

    it('should call setStep with 1', () => {
      expect(setStepMock).toHaveBeenCalledWith(1);
    });
  });
});
