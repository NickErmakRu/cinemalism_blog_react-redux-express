import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import js_cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';

import App from './components/App';
import store from './store';
import { setCurrentUser, logoutUser } from "./store/actions/authActions";

// import './index.css';

const jwt = js_cookie.get('jwt');

if (jwt) {
    const decoded = jwt_decode(jwt);
    store.dispatch(setCurrentUser(decoded));

    // const currentTime = Date.now() / 1000;

    //время сессии
    // console.log(currentTime);
    // console.log(decoded.exp);

    // if (decoded.exp < currentTime) {
    //     store.dispatch(logoutUser());
    //     window.location.href = '/login';
    // }
}

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

