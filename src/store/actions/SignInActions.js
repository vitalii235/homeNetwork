import { SIGN_IN_EMAIL, SIGN_IN_PASSWORD, SOMETHING_IS_WRONG, USER_IS_LOGGED, USER_IS_SIGN_IN } from "../types"
import { authApi } from "../../services/API"
import { getAllUsers } from "./MainPageActions"

export const getEmailSignIn = payload => {
    return {
        type: SIGN_IN_EMAIL,
        payload
    }
}
export const getPasswordSignIn = payload => {
    return {
        type: SIGN_IN_PASSWORD,
        payload
    }
}
export const somethingIsWrong = payload => {
    return {
        type: SOMETHING_IS_WRONG,
        payload
    }
}
export const userIsLogged = payload => {
    return {
        type: USER_IS_LOGGED,
        payload
    }
}
export const userIsSignIn = payload => {
    return {
        type: USER_IS_SIGN_IN,
        payload
    }
}

export function User(email, nikName, userId, userApiAdress, friends, avatar) {
    this.email = email;
    this.nikName = nikName;
    this.userId = userId;
    this.userApiAdress = userApiAdress;
    this.friends = friends;
    this.avatar = avatar;
}
export const userIteration = (data, r, id, history, dispatch, userIsSignIn, param) => {
    dispatch(getAllUsers(data))
    for (let i in data) {
        if (r.data[i].userId === id) {
            const user = new User(r.data[i].email, r.data[i].nikName, r.data[i].userId, i, r.data[i].friends, r.data[i].avatar)
            if (user.friends) {
                const newFriendsArr = user.friends.filter((i) => i !== null)
                user.friends = newFriendsArr
            }
            dispatch(userIsSignIn(user))
            if (param) { localStorage.setItem('id', r.data[i].userId) }
            history.push('/main')
        }
    }
}

export const signIn = (user, history) => {
    return async dispatch => {
        try {
            const res = await authApi.signIn(user)
            if (res) {
                try {
                    const r = await authApi.usersList()
                    userIteration(r.data, r, res.data.localId, history, dispatch, userIsSignIn, true)
                } catch (e) {
                    console.error(e);
                }
            }
        } catch (e) {
            dispatch(somethingIsWrong())
            console.error(e);
        }
    }
}

