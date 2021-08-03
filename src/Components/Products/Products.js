
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';
import { useStyles } from './style';

const Products = ({data}) => {
    const classes = useStyles();

    return ( 
    <Grid container className={classes.root}>
        {data.length > 0 && data.map((p)=>
        <Product key={p.id} {...p}/> )}
        
    </Grid>
     );
}
 
export default Products;