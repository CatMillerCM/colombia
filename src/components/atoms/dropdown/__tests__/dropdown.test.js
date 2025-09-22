
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../index';

describe('Dropdown', () => {
  const onChangeMock = jest.fn();
  const options = [1, 2, 3, 4];
  const label = 'Select an option';
  let selectBox;

  beforeEach(() => {
    render(
      <Dropdown
        value={''}
        onChange={onChangeMock}
        label={label}
        options={options}
      />
    );

    selectBox = screen.getByRole('combobox');
  });

  it('should render a select dropdown with placeholder value', () => {
    const placeholderOption = screen.getByRole('option', { name: label });

    expect(selectBox).toBeInTheDocument();
    expect(placeholderOption).toBeInTheDocument();
    expect(selectBox).toHaveValue('');
  });

  it('should render all options and disabled placeholder option', () => {
    const dropdownOptions = screen.getAllByRole('option');
    const optionValues = dropdownOptions.map(option => option.textContent);
    const placeholderOption = screen.getByRole('option', { name: label });

    expect(dropdownOptions.length).toBe(options.length + 1);
    expect(optionValues).toEqual(expect.arrayContaining(options.map(String)));
    expect(placeholderOption).toBeDisabled();
  });

  describe('when an option is selected', () => {
    beforeEach(() => {
      fireEvent.change(selectBox, { target: { value: '4' } });
    });

    it('should call onChange', () => {
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
