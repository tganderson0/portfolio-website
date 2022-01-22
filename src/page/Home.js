import { Typography } from "@mui/material";
import React from "react";
import ShortPost from "../component/post/ShortPost";
import './page.css';

const Home = () => {
  return (
    <div className="center-children">
      <Typography variant="h1" marginTop={4}>
        Welcome!
      </Typography>
      <Typography marginBottom={4}>
        My most recent project is below! Check out my project archive for more, or go straight to my GitHub!
      </Typography>
      <ShortPost title='Test' image={require('../static/images/simple.jpg')} alt='image of duck' description='a short post about ducks' />
    </div>
  );
}

export default Home;