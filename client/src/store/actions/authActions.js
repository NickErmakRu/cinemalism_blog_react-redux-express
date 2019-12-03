import axios from 'axios';
import * as actions from './index';
import js_cookie from 'js-cookie';

export const loginUser = loginData => async dispatch => {

    try {
        const res = await axios.post('/api/auth/login', loginData);
        axios.defaults.headers.common = { 'Authorization': res.data.token }
        // 'Authorization': `Bearer ${getJwtCookie()}`
        //реализовать получение куки => document.cookie
        // console.log(js_cookie)
        dispatch({ type: actions.SET_USER, user: res.data.user });
    } catch(e) {
        dispatch({ type: actions.ERROR, error: e.response.data })
    }
}

export const registerUser = registerData => async dispatch => {
    try {
        const res = await axios.post('/api/auth/register', registerData)
        dispatch({ type: actions.SET_USER, user: res.data.content });
    } catch(e) {
        dispatch({ type: actions.ERROR, error: e.response.data })
    }
}


export const logoutUser = () => {
    js_cookie.remove('jwt');
    return {
        type: actions.LOGOUT_USER
    };
}

export const setCurrentUser = user => ({
    type: actions.SET_USER,
    user
})
