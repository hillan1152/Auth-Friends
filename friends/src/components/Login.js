import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username:'',
            password:''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return(
            <div>
                <form>
                    <input
                        type='text'
                        name='usename'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}