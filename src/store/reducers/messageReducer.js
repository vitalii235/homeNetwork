import { GET_ALL_MESSAGES, MESSAGE_MODAL_IS_CLOSED, MESSAGE_MODAL_IS_OPEN, MODAL_MESSAGE_INPUT_VALUE, GET_CURRENT_MESSAGE, GET_CURRENT_MESSAGE_ID, PASSWORD_IS_VALID, PASSWORD_IS_INVALID } from "../types"

const initialState = {
    messageList: [],
    modalStatus: false,
    modalInputValue: '',
    currentMessage: '',
    currentId: '',
    passwordValid:true
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES:
            return {
                ...state, messageList: [...action.payload]
            }
        case MESSAGE_MODAL_IS_CLOSED:
            return {
                ...state, modalStatus: false
            }
        case MESSAGE_MODAL_IS_OPEN:
            return {
                ...state, modalStatus: true
            }
        case MODAL_MESSAGE_INPUT_VALUE:
            return {
                ...state, modalInputValue: action.payload
            }
        case GET_CURRENT_MESSAGE:
            return {
                ...state, currentMessage: action.payload
            }
        case GET_CURRENT_MESSAGE_ID:
            return {
                ...state, currentId: action.payload
            }
        case PASSWORD_IS_VALID:
            return{
                ...state, passwordValid:true
            }
        case PASSWORD_IS_INVALID:
            return{
                ...state, passwordValid:false
            }
        default:
            return state
    }

}