import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from '@mui/icons-material/Lock';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton color="inherit" component={Link} to="/">
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/admin">
          <LockIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
