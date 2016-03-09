import React from 'react'
import {render} from 'react-dom'
import Auth from '../services/Auth'


export default class Dashboard extends React.Component {
    render() {
        const token = Auth.getToken();

        return (
            <div>
                <h1>Панель управления</h1>
                <p>You made it!</p>
                <p>{token}</p>
            </div>
        )
    }
}