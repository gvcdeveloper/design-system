import type { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';
import { useState } from 'react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {},
} satisfies Meta<typeof Switch>;

export default meta;

export const BasicSwitch: StoryFn<typeof Switch> = () => {
  const [isOn, setOn] = useState(false);

  const handleToggle = () => {
    setOn(!isOn);
    action('switch-toggled')();
  };

  return <Switch isOn={isOn} handleToggle={handleToggle} name="sb-name" />;
};
