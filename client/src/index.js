import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import axios from 'axios';
import jwt from 'jsonwebtoken';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import auth from './reducers/auth';
import messages from './reducers/flash';

import Signin from './components/auth/Signin.jsx';
import Signup from './components/auth/Signup.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import FlashMessagesList from './components/flash/FlashMessagesList';

import withRedirect from './hoc/withRedirect';

import {AUTH_USER} from './actions/auth';

const store = createStore(combineReducers({auth, messages}), applyMiddleware(logger, thunk));

const token = localStorage.getItem('jwt');
if (token) {
    axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
    store.dispatch({
        type: AUTH_USER,
        user: jwt.decode(token)
    });
}

/* FLASH MESSAGE */

let nextFlashId = 0;

export const flash = (content, alertClassName = 'success') => {
    store.dispatch({
        type: 'ADD_FLASH_MESSAGE',
        id: nextFlashId++,
        content,
        alertClassName
    });
}

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signin" component={withRedirect(Signin)}/>
                <Route path="/signup" component={withRedirect(Signup)}/>
                <Route component={NotFound}/>
            </Switch>
            <FlashMessagesList/>
            <Footer/>
        </div>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
