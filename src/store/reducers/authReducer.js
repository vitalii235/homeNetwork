import {
    EMAIL_VALUE,
    PASSWORD_VALUE,
    NIKNAME_VALUE,
    USER_EXIST,
    USER_NOT_EXIST,
    PASSWORD_LENGTH_SMALL,
    PASSWORD_LENGTH_OK,
    NIKNAME_EXIST,
    NIKNAME_NOT_EXIST,
    USER_REGISTRED,
    USER_NOT_REGISTRED,
    NIKNAME_IS_EMPTY,
    NIKNAME_IS_NOT_EMPTY,
    EMAIL_IS_INCORRECT,
    EMAIL_IS_CORRECT,
    EMAIL_IS_EMPTY,
    EMAIL_IS_NOT_EMPTY,
    SPINER_IS_ACTIVE,
    SPINER_IS_NOT_ACTIVE,
    UPLOAD_MODAL_IS_OPEN,
    UPLOAD_MODAL_IS_CLOSED,
    UPLOAD_FILES,
    GET_LINK_TO_AVATAR,
    IMAGE_IS_UPLOADEDING,
    IMAGE_HAS_BEEN_UPLOADED
} from "../types"

const initialState = {
    auth: {
        email: '',
        password: '',
        nikName: '',
        linkToAvatar: '',
        avatarStatus: true,
        isUserExist: false,
        passwodLength: true,
        nikNameExist: false,
        nikNameLength: true,
        isEmailCorrect: true,
        emailLangth: true,
        isUserRegistred: false,
        spiner: false,
        uploadModalStatus: false,
        image: '',
        isSignUpActive:false
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
        case USER_REGISTRED:
            const usereRegistred = state.auth
            usereRegistred.isUserRegistred = true
            usereRegistred.email = ''
            usereRegistred.password = ''
            usereRegistred.nikName = ''
            return {
                ...state, auth: usereRegistred
            }
        case USER_NOT_REGISTRED:
            const userNotRegistred = state.auth
            userNotRegistred.isUserRegistred = false
            return {
                ...state, auth: userNotRegistred
            }
        case NIKNAME_IS_EMPTY:
            const nikNameLengthFalse = state.auth
            nikNameLengthFalse.nikNameLength = false
            return {
                ...state, auth: nikNameLengthFalse
            }
        case NIKNAME_IS_NOT_EMPTY:
            const nikNameLengthTrue = state.auth
            nikNameLengthTrue.nikNameLength = true
            return {
                ...state, auth: nikNameLengthTrue
            }
        case EMAIL_IS_INCORRECT:
            const emailIsNotCorrect = state.auth
            emailIsNotCorrect.isEmailCorrect = false
            return {
                ...state, auth: emailIsNotCorrect
            }
        case EMAIL_IS_CORRECT:
            const emailIsCorrect = state.auth
            emailIsCorrect.isEmailCorrect = true
            return {
                ...state, auth: emailIsCorrect
            }
        case EMAIL_IS_EMPTY:
            const emailLengthFalse = state.auth
            emailLengthFalse.emailLangth = false
            return {
                ...state, auth: emailLengthFalse
            }
        case EMAIL_IS_NOT_EMPTY:
            const emailLengthTrue = state.auth
            emailLengthTrue.emailLangth = true
            return {
                ...state, auth: emailLengthTrue
            }
        case SPINER_IS_ACTIVE:
            const spinerIsActive = state.auth
            spinerIsActive.spiner = true
            return {
                ...state, auth: spinerIsActive
            }
        case SPINER_IS_NOT_ACTIVE:
            const spinerIsNotActive = state.auth
            spinerIsNotActive.spiner = false
            return {
                ...state, auth: spinerIsNotActive
            }
        case UPLOAD_MODAL_IS_OPEN:
            const uploadModalIsOpen = state.auth
            uploadModalIsOpen.uploadModalStatus = true
            return {
                ...state, auth: uploadModalIsOpen
            }
        case UPLOAD_MODAL_IS_CLOSED:
            const uploadModalIsClosed = state.auth
            uploadModalIsClosed.uploadModalStatus = false
            return {
                ...state, auth: uploadModalIsClosed
            }
        case UPLOAD_FILES:
            const uploadFiles = state.auth
            uploadFiles.image = action.payload
            return {
                ...state, auth: uploadFiles
            }
        case GET_LINK_TO_AVATAR:
            const linkToAvatar = state.auth
            linkToAvatar.linkToAvatar = action.payload
            return {
                ...state, auth: linkToAvatar
            }
        case IMAGE_IS_UPLOADEDING:
            const signUpIsNotActive=state.auth
            signUpIsNotActive.isSignUpActive=true
            return{
                ...state, isSignUpActive:signUpIsNotActive
            }
        case IMAGE_HAS_BEEN_UPLOADED:
            const signUpIsActive = state.auth
            signUpIsActive.isSignUpActive=false
            return{
                ...state, isSignUpActive:signUpIsActive
            }
        default:
            return state
    }

}