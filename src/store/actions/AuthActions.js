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
    EMAIL_IS_NOT_EMPTY,
    EMAIL_IS_EMPTY,
    SPINER_IS_ACTIVE,
    SPINER_IS_NOT_ACTIVE,
    UPLOAD_MODAL_IS_OPEN,
    UPLOAD_MODAL_IS_CLOSED,
    UPLOAD_FILES,
    GET_LINK_TO_AVATAR,
    IMAGE_IS_UPLOADEDING,
    IMAGE_HAS_BEEN_UPLOADED
} from "../types"
import { authApi, userApi } from "../../services/API"

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
export const userIsRegistred = payload => {
    return {
        type: USER_REGISTRED,
        payload
    }
}
export const userIsNotRegistred = payload => {
    return {
        type: USER_NOT_REGISTRED,
        payload
    }
}
export const nikNameIsEmpty = payload => {
    return {
        type: NIKNAME_IS_EMPTY,
        payload
    }
}
export const nikNameIsNotEmpty = payload => {
    return {
        type: NIKNAME_IS_NOT_EMPTY,
        payload
    }
}
export const emailIsIncorrect = payload => {
    return {
        type: EMAIL_IS_INCORRECT,
        payload
    }
}
export const emailIsCorrect = payload => {
    return {
        type: EMAIL_IS_CORRECT,
        payload
    }
}
export const emailLengthTrue = payload => {
    return {
        type: EMAIL_IS_NOT_EMPTY,
        payload
    }
}
export const emailLengthFalse = payload => {
    return {
        type: EMAIL_IS_EMPTY,
        payload
    }
}
export const spinerIsActive = payload => {
    return {
        type: SPINER_IS_ACTIVE,
        payload
    }
}
export const spinereIsNotActive = payload => {
    return {
        type: SPINER_IS_NOT_ACTIVE,
        payload
    }
}
export const uploadModalIsOpen = payload => {
    return {
        type: UPLOAD_MODAL_IS_OPEN,
        payload
    }
}
export const uploadModalIsClosed = payload => {
    return {
        type: UPLOAD_MODAL_IS_CLOSED,
        payload
    }
}
export const uploadFiles = payload => {
    return {
        type: UPLOAD_FILES,
        payload
    }
}
export const getLinkToAvatar = payload => {
    return {
        type: GET_LINK_TO_AVATAR,
        payload
    }
}
export const imageIsUploading = payload => {
    return {
        type: IMAGE_IS_UPLOADEDING,
        payload
    }
}
export const imageHasBeenUploaded = payload => {
    return {
        type: IMAGE_HAS_BEEN_UPLOADED,
        payload
    }
}
export const singUp = (item, userEmail, userPassword, nikName, linkToPhotoAvatar) => {
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
                if (!isUserRegistred[0] && isPasswordLong.length > 5 && !isNikNameExist[0] && nikName.length > 0 && userEmail.length > 0) {
                    try {
                        const r = await authApi.signUp(item)

                        if (r) {
                            const user = {
                                email: r.data.email,
                                nikName,
                                userId: r.data.localId,
                                avatar: linkToPhotoAvatar
                            }
                            const result = await authApi.postUsers(user)

                            user.userApiAdress = result.data.name
                            userApi.addFriend(result.data.name, user)
                            dispatch(userIsRegistred())
                            dispatch(spinereIsNotActive())
                            setTimeout(() => {
                                dispatch(userIsNotRegistred())
                            }, 3000)
                        }
                    } catch (e) {
                        if (userEmail.length !== 0) {
                            dispatch(emailIsIncorrect())
                        }
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