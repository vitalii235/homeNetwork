import React from 'react';
import { Auth } from './auth/Auth';
import classes from './App.module.scss';

export const App = () => {
  return (
      <div className={classes.App}>
        <Auth />
      </div>
  )
}
