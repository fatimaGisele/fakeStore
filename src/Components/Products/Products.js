import { useState } from 'react';
import { useGet } from './../../HTTP/HTTP';
import { Grid } from '@material-ui/core';
import ProductsView from './../../views/products/products';
import { useStyles } from './style';

const Products = () => {
    const [endpoint, setEndpoint] = useState('');
    const { data } = useGet(endpoint);
    const classes = useStyles();

    
    return ( 
    <Grid container className={classes.root}>
        {data.length > 0 && data.map((p)=>
        <ProductsView key={p.id} {...p}/> )}
        
    </Grid>
     );
}
 
export default Products;