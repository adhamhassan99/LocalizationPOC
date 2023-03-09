import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const neonTheme = createTheme({
  colors: {
    mainBackground: palette.greenPrimary,
    cardPrimaryBackground: palette.purpleDark,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
});

export type Theme = typeof neonTheme;
export default neonTheme;
