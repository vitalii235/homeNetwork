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

export function User(email, nikName, userId, userApiAdress, friends, avatar, messages) {
    this.email = email;
    this.nikName = nikName;
    this.userId = userId;
    this.userApiAdress = userApiAdress;
    this.friends = friends;
    this.avatar = avatar;
    this.messages=messages
}
export const getUsers = async (history, userIsSignIn, userIteration, dispatch, path) => {
    try {
      const r = await authApi.usersList()
      const id = localStorage.getItem('id')
      if (id) {
        userIteration(r.data, r, id, history, dispatch, userIsSignIn, path)
      } else {
        history.push('/auth')
      }
    } catch (e) {
      console.error(e)
    }
  }
export const userIteration = (data, r, id, history, dispatch, userIsSignIn, path='') => {
    dispatch(getAllUsers(data))
    for (let i in data) {
        if (r.data[i].userId === id) {
            console.log(r.data);
            const user = new User(r.data[i].email, r.data[i].nikName, r.data[i].userId, i, r.data[i].friends, r.data[i].avatar, r.data[i].messages)
            dispatch(userIsSignIn(user))
            localStorage.setItem('id', r.data[i].userId)
            history.push(`/main/${path}`)
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

