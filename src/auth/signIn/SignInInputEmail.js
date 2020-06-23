import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { getEmailSignIn } from '../../store/actions/SignInActions';


export const SingInInputEmail = () => {
    const { email, isSomethingWrong } = useSelector(state => state.signInReducer)

    const dispatch = useDispatch()
    return (
        <Fragment>
            {isSomethingWrong
                ? <TextField
                    error
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getEmailSignIn(value))
                    }}
                    id="outlined-error-helper-text"
                    label="Email"
                    value={email}
                    helperText="Email or password is wrong"
                    variant="outlined"
                />
                : <TextField
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getEmailSignIn(value))
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
