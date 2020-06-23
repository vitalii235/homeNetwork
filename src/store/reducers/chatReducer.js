import {
    GET_ALL_USERS,
    GET_FILTRED_NIKNAMES,
    ADD_FRIEND_BUTTOM,
    FIND_FIELD_VALUE,
    IS_YOUR_FRIEND,
    IS_NOT_YOUR_FRIEND,
    MODAL_IS_OPEN,
    MODALI_IS_CLOSED
} from "../types"

const initialState = {
    allUsers: {
    },
    findFieldValue: '',
    filtredNiknames: [],
    foundFriend: {},
    userFriends: [],
    friendInYourList: false,
    modalStatus: false
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state, allUsers: action.payload
            }
        case GET_FILTRED_NIKNAMES:
            return {
                ...state, filtredNiknames: action.payload
            }
        case FIND_FIELD_VALUE:
            return {
                ...state, findFieldValue: action.payload
            }
        case ADD_FRIEND_BUTTOM:
            const userFriends = state.userFriends
            userFriends.push(action.payload)
            return {
                ...state, userFriends
            }
        case IS_YOUR_FRIEND:
            return {
                ...state, friendInYourList: true
            }
        case IS_NOT_YOUR_FRIEND:
            return {
                ...state, friendInYourList: false
            }
        case MODAL_IS_OPEN:
            return {
                ...state, modalStatus: true
            }
        case MODALI_IS_CLOSED:
            return {
                ...state, modalStatus: false
            }
        default:
            return state
    }
}