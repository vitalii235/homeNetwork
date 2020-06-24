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

    const sendMessageFunction = async () => {
        try {
            const messageParams = {
                from: userData.nikName,
                to: certainFriend.data.nikName,
                date: new Date().getTime(),
                message: textAreaValue,
                password: inputPasswordValue
            }
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
                onClick={() => sendMessageFunction()}
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