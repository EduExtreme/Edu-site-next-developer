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
    bgheader: '#0f0f0f',
    bg: 'linear-gradient(to top, #17232d, #181e26, #17191e, #141417, #0f0f0f)',
    surface: '#162640',
    primaryText: 'white',
    primary: '#AACDFF',
    secondaryText: 'white',
    disabled: '#A7A7A7',
    transition: 'blue',
  },
});

export const light = createTheme({
  colors: {
    bgheader: '#5E9FF2',
    bg: 'linear-gradient(90deg, rgba(6,0,15,0.01724439775910369) 0%, rgba(3,2,82,1) 0%, rgba(2,1,41,1) 0%)',
    surface: '#F4F4F4',
    primaryText: 'white',
    primary: '#1163D6',
    secondaryText: '#636363',
    disabled: '#A7A7A7',
    transition: 'red',
  },
});
