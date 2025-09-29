import React from 'react';
import { render, screen } from '@testing-library/react';
import Numbers from '../index';

describe('Numbers', () => {
  const numbers = [1, 2, 3, 4, 5];

  beforeEach(() => {
    render(<Numbers numbers={numbers} />);
  });

  it('should render a list of numbers', () => {
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should render the correct number of list items', () => {
    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(numbers.length);
  });
});
