import React from 'react'
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { makeStyles } from '@material-ui/core/styles';
import { NikName } from './NikName';
import { SignUp } from './SignUp';
import { RegistredSuccess } from './RegistredSuccess';
import { InputImage } from './InputImage';
import { Spinner } from './Spinner';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            justifyContent: 'center'
        },

    },
}));

export const FormComponent = () => {
    const wrapper = useStyles();
    return (
        <form className={wrapper.root} noValidate autoComplete="off">
            <InputEmail />
            <InputPassword />
            <NikName />
            <InputImage />
            <Spinner/>
            <div>
                <SignUp />
            </div>
            <RegistredSuccess />
        </form>
    )
}