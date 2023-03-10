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
      bg: '$bg',
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
    bgheader: '#232426',
    bg: ' #0D0D0D',
    surface: '#162640',
    primaryText: '#41F2E1',
    primary: '#AACDFF',
    secondaryText: 'white',
    disabled: '#A7A7A7',
    transition: 'blue',
  },
});

export const light = createTheme({
  colors: {
    bgheader: '#023E73',
    bg: '#D9D9D9',
    surface: '#F4F4F4',
    primaryText: 'white',
    primary: '#1163D6',
    secondaryText: '#636363',
    disabled: '#A7A7A7',
    transition: 'red',
  },
});
