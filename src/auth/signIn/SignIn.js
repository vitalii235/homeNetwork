import React from 'react'
import { signIn, userIsLogged,} from '../../store/actions/SignInActions'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export const SignIn = () => {
    let history = useHistory();

    const dispatch = useDispatch()
    const { email, password } = useSelector(state => state.signInReducer)
    return (
        <div>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                    dispatch(userIsLogged())
                    const user = {
                        email,
                        password
                    }
                    dispatch(signIn(user, history))
                }
                }
            >
                Sign in
      </Button>

        </div >
    )
}