import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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

  it('renders and LEFT icon if icon property is provided', () => {
    const onClickMock = vi.fn();

    render(
      <Button
        label="Press me"
        name="btn-test"
        size="sm"
        onClick={onClickMock}
        icon={<FontAwesomeIcon icon={faCoffee} />}
      />
    );
    const buttonElement = screen.getByRole('button', { name: /Press me/i });
    const iconElement = screen.getByTitle('btn-icon');
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('renders and RIGHT icon if icon property is provided', () => {
    const onClickMock = vi.fn();

    render(
      <Button
        label="Press me"
        name="btn-test"
        size="sm"
        onClick={onClickMock}
        rightIcon={<FontAwesomeIcon icon={faCoffee} />}
      />
    );
    const buttonElement = screen.getByRole('button', { name: /Press me/i });
    const rightIconElement = screen.getByTitle('btn-icon');
    expect(buttonElement).toBeInTheDocument();
    expect(rightIconElement).toBeInTheDocument();
  });

  it('renders fullWidth mode of the button when prop is provided', () => {
    const onClickMock = vi.fn();
    render(
      <Button
        fullWidth={true}
        disabled={true}
        label="Press me"
        name="btn-test"
        size="sm"
        onClick={onClickMock}
        rightIcon={<FontAwesomeIcon icon={faCoffee} />}
      />
    );
    const buttonElement = screen.getByRole('button', { name: /Press me/i });
    expect(buttonElement).toHaveClass('w-full');
  });
});
