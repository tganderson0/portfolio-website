import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardContent } from "@mui/material";

/* Props format for a short post

  title: title for the post
  image: the relative path to the images
  alt: the alt for the image
  description: a short description of the project

*/
const ShortPost = (props) => {

  return (
    <>
      <Card sx={{ maxWidth: '50%', marginTop: '16px', marginBottom: '16px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={300}
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}

export default ShortPost;