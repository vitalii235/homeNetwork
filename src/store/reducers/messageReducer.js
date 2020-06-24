import { GET_ALL_MESSAGES } from "../types"

const initialState = {
    messageList: {}
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES:
            return{
                ...state, messageList:{...action.payload}
            }
        default:
            return state
    }

}