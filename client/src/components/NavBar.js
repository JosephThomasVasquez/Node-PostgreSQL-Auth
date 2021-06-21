import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
// import ModalDialog from "./ModalDialog";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      type: "light",
      main: lightBlue[800],
      contrastText: "white",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
      contrastText: "white",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit" className="nav-link">
              User Auth
            </Link>
          </Typography>

          <Button color="inherit" onClick={handleOpen}>
            <Typography variant="body1" className={classes.root}>
              <Link href="/users/login" color="inherit" className="nav-link">
                Login
              </Link>
            </Typography>
          </Button>

          <Button color="inherit" onClick={handleOpen}>
            <Typography variant="body1" className={classes.root}>
              <Link href="/users/register" color="inherit" className="nav-link">
                Register
              </Link>
            </Typography>
          </Button>
        </Toolbar>
        {/* <ModalDialog open={open} handleClose={handleClose} /> */}
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
