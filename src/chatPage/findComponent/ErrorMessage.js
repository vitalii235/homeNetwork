import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const ErrorMessage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="error">You already have this friend</Alert>
        </div>
    );
}