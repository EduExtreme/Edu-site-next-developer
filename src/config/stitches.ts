import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      bg: 'red',
    },
  },
  media: {
    sm: '(max-width: 37.50em)', // 600px
    md: '(max-width: 56.25em)', // 900px
    lg: '(max-width: 75em)', // 1120px
    xl: '(max-width: 90em)', // 1440px
  },
});

export const dark = createTheme({
  colors: {
    bgLinearGradient: 'linear-gradient(180deg, #060B2C 0%, #1C0F2D 100%)',
    bg: '#060B2C',
    surface: '#162640',
    primaryText: 'white',
    primary: '#AACDFF',
    secondaryText: 'white',
    disabled: '#A7A7A7',
  },
});

export const light = createTheme({
  colors: {
    bgLinearGradient: 'rgb(7, 0, 53)',
    bg: '#FFFFFF',
    surface: '#F4F4F4',
    primaryText: '#373839',
    primary: '#1163D6',
    secondaryText: '#636363',
    disabled: '#A7A7A7',
  },
});
