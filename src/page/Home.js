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
      <ShortPost title='Water Tracker' image={require('../static/images/watertracker.jpg')} alt='image of app' 
      description='A React Native project that I created to track daily water intake. Available on the app store!' 
      link="https://github.com/tganderson0/water-tracker"
      />
    </div>
  );
}

export default Home;