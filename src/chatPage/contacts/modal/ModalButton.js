import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { modalApi } from '../../../services/API';
import { useSelector, useDispatch } from 'react-redux';
import { clearModalValue } from '../../../store/actions/modalActions';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const ModalButton = ({ certainFriend }) => {
    const classes = useStyles();
    const { userData } = useSelector(state => state.signInReducer)
    const dispatch = useDispatch()
    const { textAreaValue, inputPasswordValue } = useSelector(state => state.modalReducer)
    console.log('certainUser', userData);
    console.log('certainFriend', certainFriend.data);

    class MessageParams {
        constructor(from, avatarFrom, to, avatarTo, message, password) {
            this.from = from;
            this.avatarFrom = avatarFrom;
            this.to = to;
            this.avatarTo = avatarTo
            this.date = new Date().getTime();
            this.message = message;
            this.password = password
        }
    }

    const sendMessageFunction = async () => {
        try {
            const messageParams = new MessageParams(userData.nikName, userData.avatar, certainFriend.data.nikName, certainFriend.data.avatar, textAreaValue, inputPasswordValue)
            await modalApi.sendMessage(certainFriend.data.userApiAdress, messageParams)
            await modalApi.sendMessage(userData.userApiAdress, messageParams)
            dispatch(clearModalValue())
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div>
            <Button
                onClick={sendMessageFunction}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send the message
      </Button>
        </div>
    );
}