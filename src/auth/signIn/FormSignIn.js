import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { SingInInputEmail } from './SignInInputEmail';
import { SignInInputPassword } from './SignInInputPassword';
import { SignButton } from '../../functions/SignButton'
import { useSelector, useDispatch } from 'react-redux';
import { signIn, userIsLogged } from '../../store/actions/SignInActions';
import { useHistory } from 'react-router-dom';

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

export const FormSignIn = () => {
    const { email, password } = useSelector(state => state.signInReducer)
    const dispatch = useDispatch()
    let history = useHistory()
    const handleSignIn = () => {
        dispatch(userIsLogged())
        const user = {
            email,
            password
        }
        dispatch(signIn(user, history))
    }
    const wrapper = useStyles();
    return (
        <form className={wrapper.root} noValidate autoComplete="off">
            <SingInInputEmail />
            <SignInInputPassword />
            <div>
                <SignButton
                    registerPerson={handleSignIn}
                >
                    Sing In
                </SignButton>
            </div>
        </form>
    )
}