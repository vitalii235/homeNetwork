import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';

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


export const SignUp = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authReducer)
    const { email, password, nikName, avatar, avatarStatus } = state.auth


    return (
        <Fragment>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
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
                    imgAvatar.onload = ()=>{
                        dispatch(singUp(user, email, password, nikName, avatar))
                        
                    }
                }}
            >
                Sign up
      </Button>
        </Fragment >
    )
}