import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { SingInInputEmail } from './SignInInputEmail';
import { SignInInputPassword } from './SignInInputPassword';
import {SignIn} from './SignIn'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            justifyContent: 'center',
        },

    },
}));

export const FormSignIn=()=>{
    const wrapper = useStyles();
    return(
        <form className={wrapper.root} noValidate autoComplete="off">
            <SingInInputEmail/>
            <SignInInputPassword/>
            <div>
                <SignIn/>
            </div>
        </form>
    )
}