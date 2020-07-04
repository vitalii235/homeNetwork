import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux';
import { messageModalIsClosed, getMessageModalInputValue, listOfMessages, passwordIsValid, passwordIsInvalid } from '../../store/actions/MessageActions';
import TextField from '@material-ui/core/TextField';
import { MessageButton } from './MessageButton';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const MessageModal = () => {
    const {
        modalStatus,
        currentMessage,
        modalInputValue,
        messageList,
        passwordValid
    } = useSelector(state => state.messageReducer)

    const dispatch = useDispatch()
    const classes = useStyles();

    const handleClose = () => {
        dispatch(messageModalIsClosed())
    };
    const inputValue = e => {
        const value = e.target.value
        dispatch(getMessageModalInputValue(value))
        dispatch(passwordIsValid())
    }
    const removeThePassword = () => {

        if (modalInputValue === currentMessage.password) {
            const newArrOfMessages = messageList
            for (let i of newArrOfMessages) {
                if (i.id === currentMessage.id) {
                    i.password = ''
                }
            }
            dispatch(listOfMessages(newArrOfMessages))
            dispatch(messageModalIsClosed())
        } else {
            dispatch(passwordIsInvalid())
        }
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modalStatus}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalStatus}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Enter the special password</h2>
                        <div>
                            {passwordValid
                                ? <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={modalInputValue} onChange={inputValue}
                                />
                                : <TextField
                                    error
                                    id="filled-error-helper-text"
                                    label="Error"
                                    value={modalInputValue}
                                    helperText="The password is wrong"
                                    variant="filled"
                                    onChange={inputValue}
                                />}

                            <MessageButton
                                unlock={removeThePassword}
                            >UNLOCK
                            </MessageButton>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}