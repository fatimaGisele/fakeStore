import { Container, Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useGet } from './HTTP/HTTP';
import './App.css';
import Products from './Components/Products/Products';
import Loader from './layout/Loader/Loader';

function App() {

  const [endpoint, setEndpoint] = useState('');
  const { loading, data } = useGet(endpoint);

//  const mySearch = (producto) =>{
//   setEndpoint(`category?=${producto}`);
//  } 

  return (
    <Container>
      <Typography variant='h3' component='h1'>
        Hola
      </Typography>
      {loading ? <Loader/>
      : <Products data={data}/> }
       
    </Container>
  );
}

export default App;
