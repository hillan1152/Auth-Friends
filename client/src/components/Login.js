import React from 'react';
import { axiosAuth } from '../utils/axiosAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoggedIn: false,
        isLoading: false
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    submit = e => {
        e.preventDefault();
        axiosAuth().post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)  
                this.props.history.push('/profile');  
                this.setState({...this.state, isLoggedIn: true, isLoading: true})
            })
            .catch(err => console.log('this is an error', err))
    }

    render(){
    return(
        <div>
            {/* <h2>{this.state.isLoading ? "It's Loading" : 'Not Loaded'}</h2> */}
            <h2>Login</h2>
            <form onSubmit={this.submit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={this.state.credentials.username}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.credentials.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>

    )}
}

export default Login;
