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

const initialState = {
    auth: {
        email: '',
        password: '',
        nikName: '',
        isUserExist: false,
        passwodLength: true,
        nikNameExist: false
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_VALUE:
            const emailValue = state.auth
            emailValue.email = action.payload
            return {
                ...state, auth: emailValue
            }
        case PASSWORD_VALUE:
            const passwordValue = state.auth
            passwordValue.password = action.payload
            return {
                ...state, auth: passwordValue
            }
        case NIKNAME_VALUE:
            const nikNameValue = state.auth
            nikNameValue.nikName = action.payload
            return {
                ...state, auth: nikNameValue
            }
        case USER_EXIST:
            const userExist = state.auth
            userExist.isUserExist = true
            return {
                ...state, auth: userExist
            }
        case USER_NOT_EXIST:
            const userNotExist = state.auth
            userNotExist.isUserExist = false
            return {
                ...state, auth: userNotExist
            }
        case PASSWORD_LENGTH_SMALL:
            const passwordLenghtSmall = state.auth
            passwordLenghtSmall.passwodLength = false
            return {
                ...state, auth: passwordLenghtSmall
            }
        case PASSWORD_LENGTH_OK:
            const passwordLenghtOk = state.auth
            passwordLenghtOk.passwodLength = true
            return {
                ...state, auth: passwordLenghtOk
            }
        case NIKNAME_EXIST:
            const nikNameExist = state.auth
            nikNameExist.nikNameExist = true
            return {
                ...state, auth: nikNameExist
            }
        case NIKNAME_NOT_EXIST:
            const nikNameNotExist = state.auth
            nikNameNotExist.nikNameExist = false
            return {
                ...state, auth: nikNameNotExist
            }
        default:
            return state
    }

}