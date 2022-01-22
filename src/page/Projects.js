import React from "react";
import { Typography } from "@mui/material";
import ShortPost from "../component/post/ShortPost";
import AudioPost from "../component/post/AudioPost";

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
    {
      title: "DanMIPS",
      image: require("../static/images/danmips.jpg"),
      alt: "image of DanMIPS",
      description: "A web based compiler for a variation of the MIPS architecture that we used in a computer architecture class",
      link: "https://github.com/tganderson0/danmips",
    },
    {
      title: "C++ Console Engine",
      image: require("../static/images/cppgame.jpg"),
      alt: "image of program",
      description: "A console based simple game with physics implemented",
      link: "https://github.com/tganderson0/cpp_console_engine",
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
      <AudioPost title="Creating music with AI" description="Using tensorflow to create music with a deep neural network" link="https://github.com/tganderson0/ai-music" />
      {data.map((project, index) => <ShortPost key={index} title={project.title} image={project.image} alt={project.alt} description={project.description} link={project.link} />)}
    </div>
  );
}

export default Projects;