import  HashLoader from 'react-spinners/HashLoader';
import Grid from '@material-ui/core/Grid';
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({ color = '#4A90E2', size = 150, speed = 1 }) => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      style={{ minHeight: '100vh', position: 'fixed', top: 0, left: 350 }}
    >
    <PacmanLoader
     color={color} size={size} speedMultiplier={speed} 
    />
  
      {/* <HashLoader color={color} size={size} speedMultiplier={speed} /> */}
    </Grid>
  );
};

export default Loader;




  


