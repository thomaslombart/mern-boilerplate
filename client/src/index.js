import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';

import axios from 'axios';
import jwt from 'jsonwebtoken';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import auth from './reducers/auth';
import Signin from './components/auth/Signin.jsx';
import Signup from './components/auth/Signup.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';

import {AUTH_USER} from './actions/auth';

const store = createStore(auth, applyMiddleware(logger, thunk));

const token = localStorage.getItem('jwt');
if (token) {
    axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
    store.dispatch({
        type: AUTH_USER,
        user: jwt.decode(token)
    });
}

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
