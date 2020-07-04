import React from 'react'
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { makeStyles } from '@material-ui/core/styles';
import { NikName } from './NikName';
import { SignButton } from '../functions/SignButton';
import { Success } from '../functions/Success';
import { Spinner } from './Spinner';
import { useSelector, useDispatch } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import { ChooseFile } from './ChooseFile'

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
    const { auth: { isUserRegistred, email, password, nikName, linkToAvatar, isSignUpActive } } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const styles = {
        success: {
            display: 'none',
            transition: 'all ease-in-out .5'
        },
        addImg: {
            display: 'flex',
            flexDirection: 'column',

        },
        upLoadImage: {
            border: '2px solid #544F6C',
            borderRadius: 5,
        }
    }
    isUserRegistred && (styles.success.display = 'block')

    const wrapper = useStyles();

    const registerPerson = () => {
        dispatch(spinerIsActive())
        dispatch(passwordOk())
        dispatch(userNotExist())
        dispatch(nikNameNotExist())
        dispatch(nikNameIsNotEmpty())
        dispatch(emailIsCorrect())
        dispatch(emailLengthTrue())

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
        dispatch(singUp(user, email, password, nikName, linkToAvatar))

    }

    return (
        <div className={wrapper.root} noValidate autoComplete="off">
            <InputEmail />
            <InputPassword />
            <NikName />
            <ChooseFile />
            <Spinner />
            <div>
                <SignButton registerPerson={registerPerson} buttonStatus={isSignUpActive}>
                    SIGN UP
                </SignButton>
            </div>

            <Success
                style={styles.success}
                icon={<CheckIcon fontSize="inherit" />}>
                Your registration has been success
            </Success>
        </div>
    )
}