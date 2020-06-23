import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

export const ImageAvatar =props=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Avatar" src={props.url} className={classes.large} />
    </div>
  );
}