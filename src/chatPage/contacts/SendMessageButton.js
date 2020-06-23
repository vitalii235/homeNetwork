import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { useDispatch } from 'react-redux';
import { modalIsOpen } from '../../store/actions/MainPageActions';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const SendMessageButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <div>
            <Button
                onClick={() => dispatch(modalIsOpen())}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Text the message
      </Button>
        </div>
    );
}