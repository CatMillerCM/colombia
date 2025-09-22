
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../index';

describe('Toggle atom', () => {
  const handleChangeMock = jest.fn();

  beforeEach(() => {
    render(
      <Toggle
        onChange={handleChangeMock}
        leftLabel="Foo"
        rightLabel="Bar"
      />
    );
  });

  it('should render with custom left and right labels', () => {
    expect(screen.queryByText('Foo')).toBeInTheDocument();
    expect(screen.queryByText('Bar')).toBeInTheDocument();
  });

  it('should call handleChange when toggled', () => {
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(handleChangeMock).toHaveBeenCalled();
  });
});
