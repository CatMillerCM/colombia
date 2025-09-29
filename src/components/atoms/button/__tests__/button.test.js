import { render, screen } from '@testing-library/react';
import Button from '../index';

describe('Button', () => {
  const handleClickMock = jest.fn();
  let button;

  beforeEach(() => {
    render(
      <Button
        onClick={handleClickMock}
        label="Button Label"
      />
    );

    button = screen.getByRole('button', { name: /button label/i });
  });

  it('should render a button with correct text', () => {
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    button.click();

    expect(handleClickMock).toHaveBeenCalled();
  });

  it('should not be disabled by default', () => {
    expect(button).not.toBeDisabled();
  });
});
