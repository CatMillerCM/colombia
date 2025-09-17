import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayersDropdown from '../index';

describe('PlayersDropdown', () => {
  const setPlayerCountMock = jest.fn();
  const ballNumbers = [1, 2, 3, 4, 5];
  let selectBox = null;

  beforeEach(() => {
    render(
      <PlayersDropdown
        playerCount={2}
        setPlayerCount={setPlayerCountMock}
        ballNumbers={ballNumbers} />
    );

    selectBox = screen.getByRole('combobox');
  });

  it('should render a select dropdown with placeholder value', () => {
    const placeholderValue = screen.getByText('Select number of players');

    expect(selectBox).toBeInTheDocument();
    expect(placeholderValue).toBeInTheDocument();
  });

  it('should render a select dropdown with all ball number options and disabled placeholder option', () => {
    const dropdownOptions = screen.getAllByRole('option');
    const optionValues = dropdownOptions.map(option => option.textContent);
    const placeholderOption = screen.getByRole('option', { name: 'Select number of players' });

    expect(dropdownOptions.length).toBe(ballNumbers.length + 1);
    expect(optionValues).toEqual(expect.arrayContaining(ballNumbers.map(String)));
    expect(placeholderOption).toBeDisabled();
  });

  describe('when an option is selected', () => {
    beforeEach(() => {
      fireEvent.change(selectBox, { target: { value: '4' } });
    });

    it('should call setPlayerCount with the selected option', () => {
      expect(setPlayerCountMock).toHaveBeenCalledWith('4');
    });
  });
});
