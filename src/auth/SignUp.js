import React, { Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';

import { singUp, passwordSmall, passwordOk, userNotExist, nikNameNotExist } from '../store/actions/Auth';


export const SignUp = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authReducer)
    const { email, password, nikName } = state.auth

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                    dispatch(passwordOk())
                    dispatch(userNotExist())
                    dispatch(nikNameNotExist())
                    if (password.length < 6) {
                        dispatch(passwordSmall())
                    }

                    const user = {
                        email,
                        password,
                        returnSecureToken: true
                    }
                    dispatch(singUp(user, email, password, nikName))
                }}
            >
                Sign up
      </Button>
        </Fragment >
    )
}