import { render, screen, fireEvent } from '@testing-library/react';
import RemainderWarning from '..';

describe('RemainderWarning', () => {
  const setUseRemainderMock = jest.fn();

  describe('when toggle is changed', () => {
    beforeEach(() => {
      render(
        <RemainderWarning
          setUseRemainder={setUseRemainderMock}
        />
      );

      const toggle = screen.getByRole('checkbox');
      fireEvent.click(toggle);
    });

    it('should call setUseRemainder when toggle is changed', () => {
      expect(setUseRemainderMock).toHaveBeenCalled();
    });
  });
});
