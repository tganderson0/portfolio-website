import React from "react";
import { Typography } from "@mui/material";
import ShortPost from "../component/post/ShortPost";

const data = [
    {
      title: "Water Tracker",
      image: require("../static/images/watertracker.jpg"),
      alt: "image of app",
      description: "A React Native project that I created to track daily water intake.",
      link: "https://github.com/tganderson0/water-tracker",
    },
    {
      title: "Maze Game",
      image: require("../static/images/mazegame.jpg"),
      alt: "image of mazegame",
      description: "A console based 3D renderer based on the old Wolfenstein game",
      link: "https://github.com/tganderson0/Maze-Game",
    },
  ];

const Projects = () => {


  return (
    <div className="center-children">
      <Typography variant="h1" marginTop={4}>
        Previous Projects
      </Typography>
      <Typography marginBottom={4}>
        My most recent project is below! Check out my project archive for more, or go straight to my GitHub!
      </Typography>
      {data.map(project => <ShortPost title={project.title} image={project.image} alt={project.alt} description={project.description} link={project.link} />)}
    </div>
  );
}

export default Projects;