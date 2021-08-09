import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Grid} from '@material-ui/core';
import Header from './layout/Header/Header';
import Loader from './layout/Loader/Loader';
import { useStyles } from './style';

const Home = lazy(() => import('./Components/Products/Products'));
const DetailProduct = lazy(()=>import('./Components/Product/Product'));
function App() {
//  const mySearch = (producto) =>{
//   setEndpoint(`category?=${producto}`);
//  } 
const classes = useStyles();

  return (
    <Suspense fallback={<Loader />}>
      <Container className={classes.root}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/product/:id' component={DetailProduct} />
          <Route />
        </Switch>
      </Container>
    </Suspense>
  );
}

export default App;
