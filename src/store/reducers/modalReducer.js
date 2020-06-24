import { MODAL_TEXT_AREA_VALUE, INPUT_MODAL_PASSVORD, CLEAR_MODAL_DATA } from "../types"

const initialState = {
    textAreaValue: '',
    inputPasswordValue: ''
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_TEXT_AREA_VALUE:
            return {
                ...state, textAreaValue: action.payload
            }
        case INPUT_MODAL_PASSVORD:
            return {
                ...state, inputPasswordValue: action.payload
            }
        case CLEAR_MODAL_DATA:
            return{
                ...state, textAreaValue:'', inputPasswordValue:''
            }
        default:
            return state
    }
}