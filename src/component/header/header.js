import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from '@mui/material';
import { Link } from "react-router-dom";
import './header.css';


const Navbar = () => {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className='logo'>
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
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;