import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from '../src/ThemeContext';
import '../src/index.css';
import React from 'react';
import { themes } from '@storybook/theming';

const customViewports = {
  sm: {
    name: 'Small (sm) - 640px',
    styles: {
      width: '640px',
      height: '100%',
    },
  },
  md: {
    name: 'Medium (md) - 768px',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  lg: {
    name: 'Large (lg) - 1024px',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  xl: {
    name: 'Extra Large (xl) - 1280px',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  '2xl': {
    name: '2x Extra Large (2xl) - 1536px',
    styles: {
      width: '1536px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true,
      classTarget: 'body',
      dark: { ...themes.dark, appBg: 'black' },
      light: { ...themes.normal, appBg: 'white' },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
