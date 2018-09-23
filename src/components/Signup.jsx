import React,  { Component } from 'react';
import { connect } from 'react-redux';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div>
            <h2>Register</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"  name="username"  />
                </div>
                <div>
                    <label htmlFor="username">password</label>
                    <input type="password"  name="username"  />
                </div>
                <div className="form-group">
                    <button> Register</button>
                </div>
            </div>

        );
    }
}

export default SignUp;