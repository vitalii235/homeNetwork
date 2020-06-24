import { INPUT_MODAL_PASSVORD, MODAL_TEXT_AREA_VALUE, CLEAR_MODAL_DATA } from "../types"

export const modalTextArea = payload => {
    return {
        type: MODAL_TEXT_AREA_VALUE,
        payload
    }
}
export const modalInputPassword = payload => {
    return {
        type: INPUT_MODAL_PASSVORD,
        payload
    }
}
export const clearModalValue = payload => {
    return {
        type: CLEAR_MODAL_DATA,
        payload
    }
}