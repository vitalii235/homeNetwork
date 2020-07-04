import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        width:200
    },
}));

export const UserButton = ({action, color, icon, children, link}) => {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color={color}
                className={classes.button}
                startIcon={icon}
                onClick={action}
            >
                {children}
      </Button>
        </div>
    );
}