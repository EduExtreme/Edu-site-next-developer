import { keyframes, styled } from '../../config/stitches';
const circleHesite = keyframes({
  
 
    from : {
      clipPath: 'polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)'
    },
    to :{
      clipPath: 'polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)'
    },
  
})
export const HeroSection = styled('section', {
  display: 'flex',
  width: '100%',
  height: '45vh',
  color: '$primaryText',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 16.5rem',
  margin: '0 auto',
  animation: `${circleHesite} 3s ease-in-out `,

  div : {
    width:'70%',
    display:"flex",
    alignItems:"center",
    gap:"0.5rem",
  },
  span : {
    fontSize:"2rem"
  

  },
  

  h1 : {
    fontSize:"3rem",
    width:"70%",
    '&:hover': {
      color: 'white',
    },
  
  },
  p:{
    fontSize:"1.5rem",
    '&:hover': {
      color: 'white',
    },
  },
  


  '@md': {
    padding: '0 2rem',
    height: '60vh',
  },

 
  svg: {
    cursor:'pointer',
    color:"#41F2E1",
    '&:hover': {
      color: 'white',
    },
    
    
  },

  h2: { marginBottom: '5rem' },

 
  

  
});

export const ContentSection = styled('section', {
  borderTop:"3px solid white",
  display: 'flex',
  width: '100%',
  height: '100%',
  color: '$primaryText',
  justifyContent: 'space-between',
  padding: '2rem 16.5rem',
  animation: `${circleHesite} 1.5s ease-in-out `,

  h1 : {
    fontSize:"3rem",
    
    
  },
  


  '@md': {
    padding: '0 2rem',
    height: '60vh',
  },

 
  '> svg': {
    position: 'absolute',
    top: 0,
  },

  h2: { marginBottom: '5rem' },

  
".card-tech" : {
  display:"flex",
  flexDirection:"column",
  width: '220px',
  height: '100%',
  background:"#054A50",
  borderRadius:"1rem",
  padding:'0rem 1rem',
  
  '&:hover': {
    color: 'white',
    background:"#000",
  },

  strong:{
    margin:"0.8rem auto"
  },
  span:{
    display:"flex",
    justifyContent:"flex-start",
    gap:"0.3rem",
    marginBottom:"0.5rem"
    
  },
  p:{
    display:"flex",
   
    marginBottom:"1rem"
  }

}
  
});