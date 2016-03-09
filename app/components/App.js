import React from 'react'
import {render} from 'react-dom'
import Auth from '../services/Auth'
import {Link} from 'react-router'


export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {loggedIn: Auth.loggedIn()}
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        })
    }

    componentWillMount() {
        Auth.onChange = this.updateAuth.bind(this);
        Auth.login()
    }

    render() {
        return (
            <div id="container">
                <ul>
                    <li>
                        {this.state.loggedIn ? (
                            <Link to="/logout">Выйти</Link>
                        ) : (
                            <Link to="/login">Войти</Link>
                        )}
                    </li>
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/dashboard">Панель управления</Link> (authenticated)</li>
                </ul>
                {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
            </div>
        )
    }

}