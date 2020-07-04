import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ModalComponent } from './modal/ModalComponent';
import { UserButton } from '../../functions/Remove_MESSAGE_Button';
import DeleteIcon from '@material-ui/icons/Delete';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import { modalIsOpen } from '../../store/actions/MainPageActions';
import { userApi } from '../../services/API';
import { userIsSignIn, userIteration, getUsers } from '../../store/actions/SignInActions';
import { useHistory } from 'react-router-dom';



export const FriendPage = ({ match }) => {
    const { userData } = useSelector(state => state.signInReducer)
    const dispatch = useDispatch()
    let history = useHistory()
    function CertainUser(apiPath, data) {
        this.apiPath = apiPath;
        this.data = data
    }
    let certainUser = null
    if (userData && match.params) {
        for (let i in userData.friends) {
            if (userData.friends[i].nikName === match.params.id) {
                let thisUser = new CertainUser(i, userData.friends[i])
                certainUser = thisUser
            }
        }
    }

    const styles = {
        image: {
            display: 'block',
            width: '200px',
            height: '200px',
            borderRadius: 20,
            border: '3px solid #fff',
        },
        text: {
            fontSize: 30
        },
        main: {
            display: 'flex',
            justifyContent: 'center'
        }
    }
    const removeFriend = async () => {
        try {
            await userApi.deleteFriend(userData.userApiAdress, certainUser.apiPath)
            const contacts = 'Contacts'
            getUsers(history, userIsSignIn, userIteration, dispatch, contacts, 'Contacts')
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div >
            {certainUser !== null
                ? <div>
                    <hr />
                    <div style={styles.text}>
                        {certainUser.data.nikName}
                    </div>
                    <div style={styles.main}>
                        <img src={certainUser.data.avatar} style={styles.image} />
                    </div>
                    <UserButton
                        color='primary'
                        icon={<MessageOutlinedIcon>send</MessageOutlinedIcon>}
                        action={() => dispatch(modalIsOpen())}
                    >
                        Text the message
                    </UserButton>
                    <UserButton
                        color='secondary'
                        icon={<DeleteIcon />}
                        action={() => {
                            removeFriend(history)
                        }}
                    >
                        Remove
                    </UserButton>
                    <ModalComponent
                        certainFriend={certainUser} />
                </div>
                : null}
        </div>
    )
}
