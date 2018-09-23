import React,  { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
            submitted: false
        });
    }

    handleSubmit = event =>{
        event.preventDefault();
        const { user } = this.state;

        // TODO = call an action creater
        // save the username and password

    }

    render() {
        return(
            <div>
            <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="username">password</label>
                        <input type="password"  name="username"  />
                    </div>
                    <div><button> Register</button></div>
                </form>
            </div>

        );
    }
}

export default SignUp;