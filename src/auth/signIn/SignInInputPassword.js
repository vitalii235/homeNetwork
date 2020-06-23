import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux'
import { getPasswordSignIn } from '../../store/actions/SignInActions'

export const SignInInputPassword = payload => {
    const dispatch = useDispatch()
    const { password, isSomethingWrong, passwordLength } = useSelector(state => state.signInReducer)
    return (
        <Fragment>
            {isSomethingWrong
                ? <TextField
                    error
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getPasswordSignIn(value))
                    }}
                    id="outlined-error-helper-text"
                    label="Password"
                    value={password}
                    helperText="Email or password is wrong"
                    variant="outlined"
                />
                : passwordLength
                    ? <TextField
                        onChange={(e) => {
                            const value = e.target.value
                            dispatch(getPasswordSignIn(value))
                        }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={password}
                    />
                    : <TextField
                        error
                        onChange={(e) => {
                            const value = e.target.value
                            dispatch(getPasswordSignIn(value))
                        }}
                        id="outlined-error-helper-text"
                        label="Password"
                        value={password}
                        helperText="Password is short"
                        variant="outlined"
                    />
            }
        </Fragment>
    )
}