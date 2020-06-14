import axios from 'axios'
const REGISTRATION_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
const API_FOR_WEB = 'AIzaSyB6eqmvtgwdFbMHAr0uiBOGZcmCHvFlhAg'
const BASE_URL = 'https://network-35b44.firebaseio.com/'
const AUTH_USERS= 'auth/users'

export const authApi = {
    signUp: (params) => axios.post(`${REGISTRATION_URL}${API_FOR_WEB}`, params),
    postUsers:(params) =>axios.post(`${BASE_URL}${AUTH_USERS}.json`, params),
    usersList:(params=null)=>axios(`${BASE_URL}${AUTH_USERS}.json`, params)
}
