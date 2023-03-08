import { keyframes, styled } from '../../config/stitches';
const circleHesite = keyframes({

  
    '0%' : {
      clipPath: 'inset(100% 100% 100% 100%)',
    },
    '40%' : {
      clipPath: 'inset(33% 33% 33% 33%)',
    },
   ' 100%': {
      clipPath: 'inset(0 0 0 0)',
    },
 
  
  

   
})
export const HeroSection = styled('section', {
  display: 'flex',
  width: '100%',
  height: '100vh',
  background: '$bgLinearGradient',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0rem 8rem',
  animation: `${circleHesite} 2.5s ease-in-out `,
  


  '@md': {
    padding: '0 2rem',
    height: '60vh',
  },

 

  h2: { marginBottom: '5rem' },

  

  
});