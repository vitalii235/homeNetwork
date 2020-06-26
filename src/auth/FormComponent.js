import React from 'react'
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { makeStyles } from '@material-ui/core/styles';
import { NikName } from './NikName';
import { SignButton } from '../functions/SignButton';
import { Success } from '../functions/Success';
import { InputImage } from './InputImage';
import { Spinner } from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';

import {
    singUp,
    passwordSmall,
    passwordOk,
    userNotExist,
    nikNameNotExist,
    nikNameIsNotEmpty,
    nikNameIsEmpty,
    emailIsCorrect,
    emailLengthTrue,
    emailLengthFalse,
    imgIsCorrect,
    imgIsNotCorrect,
    spinerIsActive,
} from '../store/actions/AuthActions';



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
    const {auth:{isUserRegistred, email, password, nikName, avatar}} = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const styles = {
        success: {
            display: 'none',
            transition: 'all ease-in-out .5'
        }
    }
    isUserRegistred && (styles.success.display = 'block')

    const wrapper = useStyles();

    const registerPerson = () => {
        dispatch(spinerIsActive())
        dispatch(imgIsCorrect())
        dispatch(passwordOk())
        dispatch(userNotExist())
        dispatch(nikNameNotExist())
        dispatch(nikNameIsNotEmpty())
        dispatch(emailIsCorrect())
        dispatch(emailLengthTrue())

        const imgAvatar = new Image()
        imgAvatar.src = avatar
        imgAvatar.onerror = () => dispatch(imgIsNotCorrect())

        if (password.length < 6) {
            dispatch(passwordSmall())
        }
        if (nikName.length === 0) {
            dispatch(nikNameIsEmpty())
        }
        if (email.length === 0) {
            dispatch(emailLengthFalse())
        }
        const user = {
            email,
            password,
            returnSecureToken: true
        }
        imgAvatar.onload = () => {
            dispatch(singUp(user, email, password, nikName, avatar))

        }
    }

    return (
        <form className={wrapper.root} noValidate autoComplete="off">
            <InputEmail />
            <InputPassword />
            <NikName />
            <InputImage />
            <Spinner />
            <div>
                <SignButton registerPerson={registerPerson}>
                    SIGN UP
                </SignButton>
            </div>
            <Success
                style={styles.success}
                icon={<CheckIcon fontSize="inherit" />}>
                Your registration has been success
            </Success>
        </form>
    )
}