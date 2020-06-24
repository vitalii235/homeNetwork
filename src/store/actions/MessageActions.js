import { GET_ALL_MESSAGES } from "../types"

export const listOfMessages = payload => {
    return {
        type: GET_ALL_MESSAGES,
        payload
    }
}