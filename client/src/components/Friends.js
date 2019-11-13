import React from 'react';
import { axiosAuth } from '../utils/axiosAuth';

class Friends extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    submit = e => {
        e.preventDefault();
        axiosAuth()
            .post('/api/friends', this.state.friend)
            .then(res => {
                console.log('Add Friends',res.data)
                this.props.history.push('/friendlist')
            })
            .catch(err => console.log(err.res))
    }
    
    
    render(){    
    return(
        <div>
            <h2>Add Friends</h2>
            <form onSubmit={this.submit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.friend.name}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={this.handleChange}
                    value={this.state.friend.age}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.friend.email}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )}
}

export default Friends; 