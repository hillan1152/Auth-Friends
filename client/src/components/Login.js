import React from 'react';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>

    )}
}

export default Login;
