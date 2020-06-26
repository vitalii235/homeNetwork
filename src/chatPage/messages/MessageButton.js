import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const MessageButton = ({ unlock, children }) => {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<LockOpenIcon />}
                onClick={unlock}
            >
                {children}
            </Button>
        </div>
    );
}

MessageButton.propTypes = {
    unlock: PropTypes.func,
    passwordIsInvalid:PropTypes.func
}
