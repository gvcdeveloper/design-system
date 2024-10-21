import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const SmallPrimary: Story = {
  args: {
    label: 'Press me',
    name: 'just-name',
    size: 'sm',
  },
};

export const MediumPrimary: Story = {
  args: {
    label: 'Press me',
    name: 'just-name',
    size: 'md',
  },
};

export const LargePrimary: Story = {
  args: {
    label: 'Press me',
    name: 'just-name',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Press me',
    name: 'just-name',
    variant: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Press me',
    name: 'just-name',
    variant: 'outlined',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Press me',
    name: 'just-name',
    variant: 'outlined',
    disabled: true,
  },
};
