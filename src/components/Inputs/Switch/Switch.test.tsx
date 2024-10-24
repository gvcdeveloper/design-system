import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Switch from './Switch';

describe('Switch component', () => {
  it('Should toggle ON/OFF state when clicked', async () => {
    let isOn = false;

    const handleToggle = vi.fn(() => {
      isOn = !isOn;
    });

    const { rerender } = render(
      <Switch name="switch-test" handleToggle={handleToggle} isOn={isOn} />
    );
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);

    rerender(
      <Switch name="switch-test" handleToggle={handleToggle} isOn={isOn} />
    );

    expect(switchElement).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(switchElement);

    rerender(
      <Switch name="switch-test" handleToggle={handleToggle} isOn={isOn} />
    );

    expect(switchElement).toHaveAttribute('aria-checked', 'false');
  });
});
