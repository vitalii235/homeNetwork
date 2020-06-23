import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux'
import { getPasswordValue } from '../store/actions/AuthActions';

export const InputPassword = () => {
    const state = useSelector(state => state.authReducer)
    const { password, passwodLength } = state.auth
    const dispatch = useDispatch()

    return (
        <Fragment>
            {passwodLength
                ? <TextField
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getPasswordValue(value))
                       
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
                        dispatch(getPasswordValue(value))
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