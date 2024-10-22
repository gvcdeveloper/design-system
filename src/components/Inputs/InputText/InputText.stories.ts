import type { Meta, StoryObj } from '@storybook/react';
import InputText from './InputText';

const meta = {
  title: 'Components/InputText',
  component: InputText,
  parameters: {},
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof InputText>;

export const InputTextWithlabel: Story = {
  args: {
    label: 'Name',
  },
};

export const InputTextRegular: Story = {
  args: {},
};

export const InputTextDisabled: Story = {
  args: { disabled: true, label: 'name' },
};
