import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { getEmailValue } from '../store/actions/Auth';

export const InputEmail = () => {
    const state = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const { email, isUserExist } = state.auth
    return (
        <Fragment >
            {isUserExist
                ? <TextField
                    error
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getEmailValue(value))
                    }}
                    id="outlined-error-helper-text"
                    label="Email"
                    value={email}
                    helperText="User is exist"
                    variant="outlined"
                />
                : <TextField
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getEmailValue(value))
                    }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type='email'
                    value={email}
                />
            }

        </Fragment>
    )
}
