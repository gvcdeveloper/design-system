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
    children: 'Press me',
    name: 'just-name',
    size: 'sm',
  },
};

export const MediumPrimary: Story = {
  args: {
    children: 'Press me',
    name: 'just-name',
    size: 'md',
  },
};

export const LargePrimary: Story = {
  args: {
    children: 'Press me',
    name: 'just-name',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Press me',
    name: 'just-name',
    variant: 'secondary',
  },
};
