import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { CardContent } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";

import './card.css'

/* Props format for a short post

  title: title for the post
  description: a short description of the project
  link: the link the card should take you to on click
*/
const AudioPost = (props) => {

  return (
    <>
      <Card sx={{ maxWidth: '50%', marginTop: '16px', marginBottom: '16px' }} className='card'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1201761904&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', overflow: 'hidden'}}><a href="https://soundcloud.com/user-822967770-229798132" title="Taylor" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Taylor</a> · <a href="https://soundcloud.com/user-822967770-229798132/town" title="Town" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Town</a></div>
        <IconButton onClick={() => {
          window.open(props.link)
        }}>
          <GitHub />
        </IconButton>
    </Card>
    </>
  );
}

export default AudioPost;