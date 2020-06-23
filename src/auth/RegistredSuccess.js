import React from 'react';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import { useSelector } from 'react-redux';

export const RegistredSuccess = () => {
    const styles = {
        display: 'none',
        transition: 'all ease-in-out .5'
    }
    const state = useSelector(state => state.authReducer)
    if (state.auth.isUserRegistred) {
        styles.display = 'block'
    }

    return (
        <div style={styles}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Your registration has been success
      </Alert>
        </div>
    );
}