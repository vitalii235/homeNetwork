import {
    GET_ALL_USERS,
    GET_FILTRED_NIKNAMES,
    FIND_FIELD_VALUE,
    IS_YOUR_FRIEND,
    IS_NOT_YOUR_FRIEND,
    MODAL_IS_OPEN,
    MODALI_IS_CLOSED
} from "../types"

export const getAllUsers = payload => {
    return {
        type: GET_ALL_USERS,
        payload
    }
}
export const searchValue = payload => {
    return {
        type: FIND_FIELD_VALUE,
        payload
    }
}
export const getFilteredNiknames = payload => {
    return {
        type: GET_FILTRED_NIKNAMES,
        payload
    }
}
export const isYourFriend = payload => {
    return {
        type: IS_YOUR_FRIEND,
        payload
    }
}
export const isNotYourFriend = payload => {
    return {
        type: IS_NOT_YOUR_FRIEND,
        payload
    }
}
export const modalIsOpen = payload => {
    return {
        type: MODAL_IS_OPEN,
        payload
    }
}
export const modalIsClose = payload => {
    return {
        type: MODALI_IS_CLOSED,
        payload
    }
}