import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders a small button with a label and the specified size', () => {
    render(
      <Button label="Press me" name="btn-test" size="sm" onClick={() => {}} />
    );
    const buttonElement = screen.getByRole('button', { name: /Press me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', async () => {
    const onClickMock = vi.fn();
    render(
      <Button
        label="Press me"
        name="btn-test"
        size="sm"
        onClick={onClickMock}
      />
    );
    const buttonElement = screen.getByRole('button', { name: /Press me/i });
    await userEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('gets disabled when disabled is true', async () => {
    const onClickMock = vi.fn();
    render(
      <Button
        disabled={true}
        label="Press me"
        name="btn-test"
        size="sm"
        onClick={onClickMock}
      />
    );
    const buttonElement = screen.getByRole('button', { name: /Press me/i });
    await userEvent.click(buttonElement);
    expect(onClickMock).toBeCalledTimes(0);
    expect(buttonElement).toBeDisabled();
  });
});
