import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import { userApi } from '../../services/API';
import { ErrorMessage } from './ErrorMessage';
import { isYourFriend, isNotYourFriend } from '../../store/actions/MainPageActions';
import { getUsers, userIsSignIn, userIteration } from '../../store/actions/SignInActions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        color: '#000',
    },
}));

export const ListOfFindUsers = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const chatState = useSelector(state => state.chatReducer)
    const signInState = useSelector(state => state.signInReducer)
    const { filtredNiknames, findFieldValue, friendInYourList } = chatState
    const { userApiAdress } = signInState.userData
    const { userData } = signInState
    let history = useHistory()
    if (userData.friends === undefined) {
        userData.friends = []
    }

    const addFriend = async (item) => {
        const listOfFriends = []
        for(let i in userData.friends){
            listOfFriends.push(userData.friends[i])
        }
        const avaliableUsers = listOfFriends.find((user) => user.nikName === item)
        if (!avaliableUsers) {
            for (let j in chatState.allUsers) {
                if (chatState.allUsers[j].nikName === item) {
                    const user = chatState.allUsers[j]
                    try {
                        await userApi.addFriend(userApiAdress, user)
                        getUsers(history, userIsSignIn, userIteration, dispatch, 'Find')
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        } else {
            dispatch(isYourFriend())
            setTimeout(() => dispatch(isNotYourFriend()), 3000)
        }
    }
    return (
        <div className={classes.root}>
            {friendInYourList && <ErrorMessage />}
            {filtredNiknames.length > 0 && findFieldValue.length !== 0 &&
                <List component="nav" aria-label="secondary mailbox folders">
                    {filtredNiknames.map((item) => (
                        <ListItem button key={Math.random()}>
                            <ListItemText primary={item} />
                            <AddIcon onClick={() => addFriend(item)} />
                        </ListItem>
                    ))}
                </List>}
        </div>
    );
}