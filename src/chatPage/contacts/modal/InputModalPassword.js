import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { modalInputPassword } from '../../../store/actions/modalActions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export const InputModalPassword = () => {
    const classes = useStyles();
    const { inputPasswordValue } = useSelector(state => state.modalReducer)
    const dispatch = useDispatch()
    const handleChangeInput = (e) => {
        const value = e.target.value
        dispatch(modalInputPassword(value))
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="outlined"
                value={inputPasswordValue}
                onChange={handleChangeInput}
            />
        </form>
    );
}