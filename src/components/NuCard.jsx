import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReceiptIcon from '@mui/icons-material/Receipt';

import ReceiptImg from '../assets/receipts.png';


export default function NuCard( {altText, image, title, description, route} ) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        src={image}
        alt={altText}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={route} style={{ textDecoration: 'none' }}>
          <Button size="small">Start</Button>
        </a>

      </CardActions>
    </Card>
  );
}