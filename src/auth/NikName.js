import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { getNikNameValue } from '../store/actions/Auth';

export const NikName = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authReducer)
    const { nikName, nikNameExist } = state.auth
    return (
        <Fragment>
            {nikNameExist
                ? <TextField
                    error
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getNikNameValue(value))
                    }}
                    id="outlined-error-helper-text"
                    label="Nikname"
                    value={nikName}
                    helperText="This Name is already exist"
                    variant="outlined"
                />
                : <TextField
                    onChange={(e) => {
                        const value = e.target.value
                        dispatch(getNikNameValue(value))
                    }}
                    id="outlined-secondary"
                    label="Nikname"
                    variant="outlined"
                    value={nikName}
                />}

        </Fragment>
    )
}