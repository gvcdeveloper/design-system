import React from 'react';
import { useTheme } from './hooks/useTheme';
import Switch from './components/Inputs/Switch/Switch';

const ThemeSwitcher: React.FC = () => {
  const context = useTheme();
  if (!context) {
    return null;
  }
  const { isDarkMode, toggleTheme } = context;

  return (
    <Switch name="mode-switcher" isOn={isDarkMode} handleToggle={toggleTheme} />
  );
};

export default ThemeSwitcher;
