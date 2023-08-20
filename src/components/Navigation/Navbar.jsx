import React from "react";
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/Feelings">
          Page 1 Feelings
        </Button>
        <Button color="inherit" component={Link} to="/Understanding">
          Page 2 Understanding
        </Button>
        <Button color="inherit" component={Link} to="/Support">
          Page 3 Support
        </Button>
        <Button color="inherit" component={Link} to="/Comments">
          Comments
        </Button>
        <Button color="inherit" component={Link} to="/Review">
          Review
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
