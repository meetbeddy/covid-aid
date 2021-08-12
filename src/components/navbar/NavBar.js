import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./navbar.css";
// import { MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app__bar: {
    backgroundColor: "green",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.app__bar}>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          Covid Aid
        </Typography>
        <Button color="inherit" onClick={props.toggleOpen}>
          <Link color="inherit"> Self Assessment</Link>
        </Button>
        <Button color="inherit">
          <Link color="inherit"> Report A Case</Link>
        </Button>
        <Button color="inherit">Donate</Button>
        <Button color="inherit">
          <Link to="/login">Login</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
