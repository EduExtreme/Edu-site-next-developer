

import { globalCss } from '../config/stitches';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
  },

  'body > div > main': {
    background: '$bg',
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
    outline: 0,
    border: 0,
  },

  'ul li': {
    listStyleType: 'none',
  },
});
