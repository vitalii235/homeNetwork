import {
    EMAIL_VALUE,
    PASSWORD_VALUE,
    NIKNAME_VALUE,
    USER_EXIST,
    USER_NOT_EXIST,
    PASSWORD_LENGTH_SMALL,
    PASSWORD_LENGTH_OK,
    NIKNAME_EXIST,
    NIKNAME_NOT_EXIST
} from "../types"
import { authApi } from "../../services/API"

export const getEmailValue = payload => {
    return {
        type: EMAIL_VALUE,
        payload
    }
}
export const getPasswordValue = payload => {
    return {
        type: PASSWORD_VALUE,
        payload
    }
}
export const getNikNameValue = payload => {
    return {
        type: NIKNAME_VALUE,
        payload
    }
}
export const userExist = payload => {
    return {
        type: USER_EXIST,
        payload
    }
}
export const userNotExist = payload => {
    return {
        type: USER_NOT_EXIST,
        payload
    }
}
export const passwordSmall = payload => {
    return {
        type: PASSWORD_LENGTH_SMALL,
        payload
    }
}
export const passwordOk = payload => {
    return {
        type: PASSWORD_LENGTH_OK,
        payload
    }
}
export const nikNameExist = payload => {
    return {
        type: NIKNAME_EXIST,
        payload
    }
}
export const nikNameNotExist = payload => {
    return {
        type: NIKNAME_NOT_EXIST,
        payload
    }
}
export const singUp = (item, userEmail, userPassword, nikName) => {
    return async dispatch => {
        try {
            const result = await authApi.usersList()
            if (result) {
                let listOfUsers = Object.values(result.data)

                const emails = []
                const nikNames = []
                for (let i of listOfUsers) {
                    emails.push(i.email)
                    nikNames.push(i.nikName)
                }

                const isUserRegistred = emails.filter((item) => item.toLowerCase() === userEmail.toLowerCase())
                const isNikNameExist = nikNames.filter((item) => item.toLowerCase() === nikName.toLowerCase())

                const isPasswordLong = userPassword
                if (!isUserRegistred[0] && isPasswordLong.length > 5 && !isNikNameExist[0]) {
                    const r = await authApi.signUp(item)
                    if (r) {
                        const user = {
                            email: r.data.email,
                            nikName,
                            userId: r.data.localId
                        }
                        const res = await authApi.postUsers(user)
                    }
                } else if (isUserRegistred[0]) {
                    dispatch(userExist())
                } else if (isNikNameExist[0]) {
                    dispatch(nikNameExist())
                }
            }
        } catch (e) {
            console.error(e);
        }

    }
}