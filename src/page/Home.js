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
      <ShortPost title='Tower Defense/Crow Engine' image={require('../static/images/towerdefense.jpg')} alt='image of game' 
      description='A tower defense game built with Monogame, utilizing a custom game engine that me and my brother created that we call "Crow Engine"' 
      link="https://github.com/Serpents-of-the-East/TowerDefense"
      />
    </div>
  );
}

export default Home;