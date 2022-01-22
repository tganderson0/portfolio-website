import React from "react";
import { Typography } from "@mui/material";
import me from '../static/images/me.jpg'

const About = () => {
  return (
    <div className='center-children'>
      <Typography variant='h1' marginTop={4}>
        About Me
      </Typography>
      <img src={me} alt="a picture of me" height='400' width='auto' />
      <div style={{ width: '50%', marginTop: 16, marginBottom: 16 }}>
      
      <Typography style={{ padding: 4 }}>
        My name is Taylor Anderson, and I am a software developer! I am a senior at USU studying Computer Science, as well as a Junior Software Engineer at Aidia LLC.
      </Typography>
      <Typography style={{ padding: 4 }}>
        I first got into the Computer Science in my Junior year of high school, creating basic programs in C#. I fell off from it for awhile, until I decided to take the
        intro to Computer Science class my Freshman year at USU. Ever since that first class, I have fallen in love with creating software.
        To me, Computer Science is all about problem solving, which is something that I truly love.
      </Typography>
      </div>
      
    </div>
  );
}

export default About;