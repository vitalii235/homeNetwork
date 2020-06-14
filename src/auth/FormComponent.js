import React from 'react'
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { makeStyles } from '@material-ui/core/styles';
import { NikName } from './NikName';
import { SignUp } from './SignUp';
import { RegistredSuccess } from './RegistredSuccess';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
}));

export const FormComponent = () => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <InputEmail />
            <InputPassword />
            <NikName />
            <RegistredSuccess/>
            <div>
                <SignUp />
            </div>
        </form>
    )
}