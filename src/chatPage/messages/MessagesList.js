import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { messageApi } from '../../services/API';
import { useSelector, useDispatch } from 'react-redux';
import { listOfMessages } from '../../store/actions/MessageActions'

const action = (
    <Button color="secondary" size="small">
        remove
    </Button>
);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const MessagesList = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.signInReducer)
    const { messageList } = useSelector(state => state.messageReducer)
    const userApi = userData.userApiAdress
    const getAllMessages = async () => {
        try {
            const r = await messageApi.messageList(userApi)
            dispatch(listOfMessages(r.data))
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        getAllMessages()
    }, [])
    const messagesIterated = (messages) => {
        const message = []
        for (let i in messages) {
            const messageDate = {
                messageApi: i,
                ...messages[i]
            }
            message.push(messageDate)
        }
        console.log(message);

        return message
    }

    return (
        <div className={classes.root}>
            {messagesIterated(messageList).map((item) => (<SnackbarContent
                message={
                    <div>
                        <div>{`from:${item.from}`}</div>
                        <div>{`message:${item.message}`}</div>
                    </div>
                }
                action={action}
                key={Math.random()} />))}
        </div>
    );
}