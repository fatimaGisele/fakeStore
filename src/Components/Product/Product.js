import { Card, CardActionArea, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
import { useStyles } from './style';

const Product = ({image, title, price, description,category, id}) => {
    const classes = useStyles();
    
    return ( 
        <Card item className={classes.root} xs={12} md={6} lg={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Ver Detalle
        </Button>
      </CardActions>
    </Card>
     );
}
 
export default Product;