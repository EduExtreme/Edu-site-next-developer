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
  borderTop:"1px solid #41F2E1",
  position:"relative",
  display: 'flex',
  width: '100%',
  height: '45vh',
  color: " hsla(170, 77%, 52%, 1)",
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 16.5rem',
  margin: '0 auto',
  animation: `${circleHesite} 3s ease-in-out `,
  

   
  

  ".text-title": {
    width:'50%',
   
    
    
    gap:"0.5rem",

    h1: {
      
      fontSize:"3rem",
      color:"white",

      
      '&:hover': {
        color: ' hsla(170, 77%, 52%, 1)',
      }, 

    },

    span:{
      fontSize:"2rem",
      '&:hover': {
        color: 'white',
      }, 


    },

    p:{
      marginTop:"2rem",
      fontSize:"1rem",
      color:"white",

      
      '&:hover': {
        color: ' hsla(170, 77%, 52%, 1)',
      }, 

    }
  },

 ".image-control" :{
position:"absolute",
right:"16rem",
top:"5rem",


"> img":{
  width:"550px",
  height:"400px"
  

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
  border:"1px solid",
 
  borderColor:"white",
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