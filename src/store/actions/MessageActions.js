import {
    GET_ALL_MESSAGES,
    MESSAGE_MODAL_IS_OPEN,
    MESSAGE_MODAL_IS_CLOSED,
    MODAL_MESSAGE_INPUT_VALUE,
    GET_CURRENT_MESSAGE,
    GET_CURRENT_MESSAGE_ID,
    PASSWORD_IS_VALID,
    PASSWORD_IS_INVALID
} from "../types"

export const listOfMessages = payload => {
    return {
        type: GET_ALL_MESSAGES,
        payload
    }
}
export const messageModalIsOper = payload => {
    return {
        type: MESSAGE_MODAL_IS_OPEN,
        payload
    }
}
export const messageModalIsClosed = payload => {
    return {
        type: MESSAGE_MODAL_IS_CLOSED,
        payload
    }
}
export const getMessageModalInputValue = payload => {
    return {
        type: MODAL_MESSAGE_INPUT_VALUE,
        payload
    }
}
export const getCurrentMessage = payload => {
    return {
        type: GET_CURRENT_MESSAGE,
        payload
    }
}
export const getCurrentMessageId = payload => {
    return {
        type: GET_CURRENT_MESSAGE_ID,
        payload
    }
}
export const passwordIsValid = payload => {
    return {
        type: PASSWORD_IS_VALID,
        payload
    }
}
export const passwordIsInvalid = payload => {
    return {
        type: PASSWORD_IS_INVALID,
        payload
    }
}