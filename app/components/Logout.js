import React from 'react'
import {render} from 'react-dom'
import Auth from '../services/Auth'

export default class Logout extends React.Component {
    componentDidMount() {
        Auth.logout()
    }

    render() {
        return <p>You are now logged out</p>
    }
}