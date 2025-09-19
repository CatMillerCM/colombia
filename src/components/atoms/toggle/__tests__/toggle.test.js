
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../index';

describe('Toggle atom', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    render(
      <Toggle
        onChange={onChangeMock}
        leftLabel="Foo"
        rightLabel="Bar"
      />
    );
  });

  it('should render with custom left and right labels', () => {
    expect(screen.queryByText('Foo')).toBeInTheDocument();
    expect(screen.queryByText('Bar')).toBeInTheDocument();
  });

  it('should call onChange when toggled', () => {
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
