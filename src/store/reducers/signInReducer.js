import {
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD,
    SOMETHING_IS_WRONG,
    USER_IS_LOGGED,
    USER_IS_SIGN_IN,
} from "../types"

const initialState = {
    email: '',
    password: '',
    passwordLength: true,
    isSomethingWrong: false,
    userData: {}
}

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_EMAIL:
            return {
                ...state, email: action.payload
            }
        case SIGN_IN_PASSWORD:
            return {
                ...state, password: action.payload
            }
     
        case SOMETHING_IS_WRONG:
            return {
                ...state, isSomethingWrong: true
            }
        case USER_IS_LOGGED:
            return {
                ...state, isSomethingWrong: false
            }
        case USER_IS_SIGN_IN:
            const userClean = state
            userClean.email = ''
            userClean.password = ''
            return {
                ...state, userData: action.payload, email: userClean.email, password: userClean.password
            }
        default:
            return state
    }
}