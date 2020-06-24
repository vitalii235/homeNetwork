import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { modalIsOpen } from '../../store/actions/MainPageActions';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

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
                endIcon={<MessageOutlinedIcon>send</MessageOutlinedIcon>}
            >
                Text the message
      </Button>
        </div>
    );
}