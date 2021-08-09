
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
import { useStyles } from './style';

const ProductsView = ({image, title, price,category, id}) => {
    const classes = useStyles({image});
 
    return ( 
      <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <Card item className={classes.root} xs={12} md={6} lg={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
          $ {price} <br/>
          {category} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.content}>
        <Button size="small" color="primary">
         Ver Detalle
        </Button>
      </CardActions>
    </Card>
    </Link>
     );
}
 
export default ProductsView;