import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { getImgValue } from '../store/actions/AuthActions';
export const InputImage = () => {
    const state = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    const { avatar, avatarStatus } = state.auth

    return (
        <Fragment>
            {avatarStatus
                ? <TextField
                    onChange={(e) => dispatch(getImgValue(e.target.value))}
                    id="outlined-basic"
                    label="Put the link on your Avatart"
                    variant="outlined"
                    value={avatar} />
                : <TextField
                    error
                    id="outlined-error-helper-text"
                    onChange={(e) => dispatch(getImgValue(e.target.value))}
                    label="Error"
                    value={avatar}
                    helperText="You have an error in adress"
                    variant="outlined"
                />}

        </Fragment>
    )
}