import axios from 'axios'
const REGISTRATION_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
const SIGN_IN_BAE_URLS = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
const API_FOR_WEB = 'AIzaSyD0ca0HOB1WnWyNkTG5blqDZd_0dS9tN-o'
const BASE_URL = 'https://network-323df.firebaseio.com/'
const AUTH_USERS = 'auth/users'

export const authApi = {
    signUp: (params) => axios.post(`${REGISTRATION_URL}${API_FOR_WEB}`, params),
    signIn: (params) => axios.post(`${SIGN_IN_BAE_URLS}${API_FOR_WEB}`, params),
    postUsers: (params) => axios.post(`${BASE_URL}${AUTH_USERS}.json`, params),
    usersList: (params = null) => axios(`${BASE_URL}${AUTH_USERS}.json`, params)
}
export const userApi = {
    addFriend: (id, params) => axios.post(`${BASE_URL}${AUTH_USERS}/${id}/friends.json`, params),
    friendsList:(user)=>axios(`${BASE_URL}${AUTH_USERS}/${user}/friends.json`),
    deleteFriend: (user, adress) => axios.delete(`${BASE_URL}${AUTH_USERS}/${user}/friends/${adress}.json`)
}
export const modalApi = {
    sendMessage: (friend, params) => axios.post(`${BASE_URL}${AUTH_USERS}/${friend}/messages.json`, params),
    getFullMessage: (friend, message, params) => axios.put(`${BASE_URL}${AUTH_USERS}/${friend}/messages/${message}.json`, params)
}
export const messageApi = {
    messageList: (user, params = null) => axios(`${BASE_URL}${AUTH_USERS}/${user}/messages.json`, params),
    removeMessage: (user, adress) => axios.delete(`${BASE_URL}${AUTH_USERS}/${user}/messages/${adress}.json`)
}