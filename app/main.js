import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import Auth from './services/Auth'

import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Logout from './components/Logout'

function requireAuth(nextState, replace) {
    if (!Auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={Header}>
            <Route path="login" component={Login} />
            <Route path="logout" component={Logout} />
            <Route path="about" component={About} />
            <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        </Route>
    </Router>
), document.getElementById('root'));