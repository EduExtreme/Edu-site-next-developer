import { styled } from '../../config/stitches';

export const Container = styled('header', {});

export const Navigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:"center",
  maxWidth: '100%',
  margin: '0 auto',
  height: '100%',
  color: '$primaryText',
  padding:'0rem 16.5rem',
  backgroundColor: '$bgheader',

  '@md': {
    padding: '0 2rem',
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
        color: 'white',
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