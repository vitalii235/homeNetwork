import React, { useEffect } from 'react';
import { authApi } from './services/API'
import classes from './App.module.scss';
import { Auth } from './auth/Auth';
import MainPage from './chatPage/MainPage'
import { userIsSignIn, userIteration, getUsers } from './store/actions/SignInActions'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  
  useEffect(() => {
    getUsers(history, userIsSignIn, userIteration, dispatch, )
  }, [])

  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path='/auth' component={Auth}/>
        <Route path='/main' component={MainPage}/>
        <Redirect to='/auth' />
      </Switch>
    </div>

  )
}
