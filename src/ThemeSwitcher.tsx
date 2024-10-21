import React from 'react';
import { useTheme } from './hooks/useTheme';
import Button from './components/Inputs/Button/Button';

const ThemeSwitcher: React.FC = () => {
  const context = useTheme();
  if (!context) {
    return null;
  }
  const { isDarkMode, toggleTheme } = context;

  return (
    <Button
      onClick={toggleTheme}
      name="hi"
      label={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      className="block mb-2"
    />
  );
};

export default ThemeSwitcher;
