import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import AuthenticatedApp from './components/AuthenticatedApp'

import Login from './components/LoginComponent'
import Home from './components/HomeComponent'
import RouterContainer from './services/RouterContainer'
import LoginActions from './actions/LoginActions'

import s from './main.css'

let jwt = localStorage.getItem('jwt');
if (jwt) {
    LoginActions.loginUser(jwt);
}

render(
    <Router history={browserHistory}>
        <Route handler={AuthenticatedApp}>
            <Route name="login" handler="Login" />
            <Route name="home" path="/" handler={Home} />
        </Route>
    </Router>, document.getElementById('root'));