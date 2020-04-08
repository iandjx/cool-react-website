import { createMuiTheme } from '@material-ui/core/styles';

import greyColor from '@material-ui/core/colors/grey';
import deepPurple from '@material-ui/core/colors/deepPurple';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    transition: string;
    colors: {
      textColors: {
        dark: string;
        light: string;
        brand: string;
      };
      paperColors: {
        light: string;
        dark: string;
      };
      backgroundColors: {
        light: string;
        dark: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    transition?: string;
    colors?: {
      textColors?: {
        dark?: string;
        light?: string;
        brand?: string;
      };
      paperColors?: {
        light?: string;
        dark?: string;
      };
      backgroundColors?: {
        light?: string;
        dark?: string;
      };
    };
  }
}

const theme = createMuiTheme({
  transition: 'all .2s ease',
  colors: {
    textColors: {
      dark: greyColor[50],
      light: greyColor[800],
      brand: deepPurple.A400,
    },
    paperColors: {
      light: '#ffffff',
      dark: deepPurple.A400,
    },
    backgroundColors: {
      light: '#ffffff',
      dark: deepPurple[900],
    },
  },
});

export default theme;
