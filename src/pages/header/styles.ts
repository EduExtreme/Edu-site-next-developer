import { styled } from '../../config/stitches';

export const Container = styled('header', {});

export const Navigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  height: '100%',
  color: '$primaryText',
  padding:'1rem 0rem',

  '@md': {
    padding: '0 2rem',
  },

  'div > img': {
    margin: '0 auto',
  },

  '.wrapper-nav': {
    display: 'flex',
    justifyContent: 'space-between',
    a: {
      color: '$primaryText',
      transition: 'all .4s',

      '@md': {
        display: 'none',
      },

      '@sm': {
        display: 'none',
      },

      '&:hover': {
        color: '$primary',
      },
    },
  },
});

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1rem',
  border: 'unset',
  background: 'unset',
});