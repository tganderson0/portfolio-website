import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Icon,
} from '@mui/material';
import { Link } from "react-router-dom";
import './header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Mail } from "@mui/icons-material";

const Navbar = () => {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className='logo' sx={{ cursor: 'default' }}>
          Taylor Anderson
        </Typography>
        <div className="navlinks">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
          <a href="mailto:tganderson0@gmail.com" className="link"><Mail /></a>
          <a href="https://github.com/tganderson0" className="link"><GitHubIcon /></a>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;