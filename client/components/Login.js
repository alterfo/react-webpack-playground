import React from 'react'
import {render} from 'react-dom'
import Auth from '../services/Auth'

class Login extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {error: false}
    }

    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const pass = this.refs.pass.value;

        Auth.login(email, pass, (loggedIn) => {
            if (!loggedIn)
                return this.setState({ error: true });

            const { location } = this.props;

            if (location.state && location.state.nextPathname) {
                this.context.router.replace(location.state.nextPathname)
            } else {
                this.context.router.replace('/')
            }
        })
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                <label><input ref="pass" placeholder="пароль" /></label> (hint: password1)<br />
                <button type="submit">Войти</button>
                {this.state.error && (
                    <p>Неверная информация для входа</p>
                )}
            </form>
        )
    }
}
// doesn't work inside class
Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default Login;