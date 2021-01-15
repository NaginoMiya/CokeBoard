import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './ApplicationBar.css';
import SignIn from './SignIn';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  toolbar: {
    color: "#fffafa",
    backgroundColor: "#284450e0",
  },
  title: {
    flexGrow: 1,
    color: "#fffafa",
    textAlign: "left",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            🥤Coke Board
          </Typography>
          <SignIn setUid={props.setUid} />
        </Toolbar>
      </AppBar>
    </div>
  );
}