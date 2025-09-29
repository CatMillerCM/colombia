import { fireEvent, render, screen } from '@testing-library/react';
import checkIfRemainder from '@/utils/check-if-remainder';
import PlayersDropdown from '..';

jest.mock('@/utils/check-if-remainder');

describe('PlayersDropdown', () => {
  const setPlayerCountMock = jest.fn();
  const setHasRemainderMock = jest.fn();

  const renderAndSelectOption = (value) => {
    render(<PlayersDropdown
      playerCount=""
      setPlayerCount={setPlayerCountMock}
      setHasRemainder={setHasRemainderMock}
    />);

    const dropdown = screen.getByRole('combobox');

    fireEvent.change(dropdown, { target: { value } });
  };

  describe('when a value is selected and a remainder exists', () => {
    beforeEach(() => {
      checkIfRemainder.mockReturnValue(true);
      renderAndSelectOption(4);
    });

    it('should call setPlayerCount with the number of the selected value', () => {
      expect(setPlayerCountMock).toHaveBeenCalledWith(4);
    });

    it('should call checkIfRemainder util with the number of the selected value and the number of balls (15)', () => {
      expect(checkIfRemainder).toHaveBeenCalledWith(4, 15);
    });

    it('should call setHasRemainder with true', () => {
      expect(setHasRemainderMock).toHaveBeenCalledWith(true);
    });
  });

  describe('when a value is selected and a remainder does NOT exist', () => {
    beforeEach(() => {
      checkIfRemainder.mockReturnValue(false);
      renderAndSelectOption(3);
    });

    it('should call setPlayerCount with the number of the selected value', () => {
      expect(setPlayerCountMock).toHaveBeenCalledWith(3);
    });

    it('should call checkIfRemainder util with the number of the selected value and the number of balls (15)', () => {
      expect(checkIfRemainder).toHaveBeenCalledWith(3, 15);
    });

    it('should call setHasRemainder with false', () => {
      expect(setHasRemainderMock).toHaveBeenCalledWith(false);
    });
  });
});
