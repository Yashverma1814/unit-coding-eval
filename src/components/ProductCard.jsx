import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const ProductCard = (props) => {
    
    const setId = props.item.id;
    const link = '/product/:'+setId;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Brand : {props.item.brand}
                    <br />
                    Category : {props.item.category}
                    <br />
                    Price : {props.item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={link}>
                <Button size="small">View</Button>
                </Link>
                <Button size="small">Add To Cart</Button>
            </CardActions>
        </Card>
    );
}
