import React from 'react'
import {render} from 'react-dom'
import Auth from '../services/Auth'
import {Alert} from 'react-bootstrap'


export default class Logout extends React.Component {
    componentDidMount() {
        Auth.logout()
    }

    render() {
        return (
                <Alert bsStyle="danger" dismissAfter={2000}>
                    <p>Выход успешен!</p>
                </Alert>
            )
    }
}