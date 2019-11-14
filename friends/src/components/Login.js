import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = props => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    console.log(props)

    const handleChange = e => {
        setInput({...input, [e.target.name]: e.target.value})
    }


    
    return(
        <div className='loginDiv'>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={props.username}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={props.password}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('MSTP Login', state)
    return{
        login: state.login,
        password: state.password
    }
}

export default connect(mapStateToProps, {})(Login)