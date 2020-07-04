import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { messageApi } from '../../services/API';
import { useSelector, useDispatch } from 'react-redux';
import { listOfMessages, messageModalIsOper, getCurrentMessage, getCurrentMessageId } from '../../store/actions/MessageActions';
import Avatar from '@material-ui/core/Avatar';
import { MessageModal } from './MessageModal';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    messageText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: 10
    },
    messagePerson: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
    }
}));

export const MessagesList = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.signInReducer)
    const { messageList } = useSelector(state => state.messageReducer)
    const userApi = userData.userApiAdress

    const iteratedState = data => {
        let newArr = []
        for (let i in data.data) {
            const message = data.data[i]
            message.id = i
            newArr.push(message)
        }
        return newArr
    }

    const getAllMessages = async () => {
        try {
            const r = await messageApi.messageList(userApi)
            let newArr = []
            for (let i in r.data) {
                const message = r.data[i]
                message.id = i
                newArr.push(message)
            }
            dispatch(listOfMessages(iteratedState(r)))
        } catch (e) {
            console.error(e);
        }
    }

    const unlockMessage = (item, id) => {
        dispatch(messageModalIsOper())
        dispatch(getCurrentMessage(item))
        dispatch(getCurrentMessageId(id))
    }
    useEffect(() => {
        getAllMessages()
    }, [])

    const action = (item, id) => (
        <div>
            <Button color="secondary" size="small" onClick={async () => {
                try {
                    await messageApi.removeMessage(userApi, item.id)
                    getAllMessages()
                } catch (e) {
                    console.error(e);
                }
            }}>
                remove
        </Button>
            {item.password.length > 0
                &&
                <Button color="secondary" size="small" onClick={() => unlockMessage(item, id)}>
                    unlock
        </Button>}
        </div>
    )
    return (
        <div className={classes.root}>
            <MessageModal />
            {messageList.map((item, id) => (<SnackbarContent
                message={
                    <div className={classes.messageText}>
                        <div className={classes.messagePerson}>
                            <Avatar alt="message from" src={item.avatarFrom} />
                            {`from:${item.from}`}
                        </div>
                        <div className={classes.messageText}>
                            {item.password.length > 0 ? 'TAP UNLOCK TO SHOW THIS MESSAGE' : `message: ${item.message}`}
                        </div>
                        <div className={classes.messagePerson}>
                            <Avatar alt="message to" src={item.avatarTo} />
                            {`to:${item.to}`}
                        </div>
                    </div>
                }
                action={action(item, new Date().getTime())}
                key={Math.random()} />)).reverse()}
        </div>
    );
}