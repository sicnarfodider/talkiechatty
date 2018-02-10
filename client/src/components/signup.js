import React, { Component } from 'react';
import axios from 'axios';


class SignUp extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const{ value, name }  =  event.target

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event){
        event.preventDefault()
        console.log('form submitted', this.state);

        axios.post('http://localhost:9000/auth/signup', this.state).then(resp =>{
            console.log('sign up response is ', resp);
        }).catch(err=>{
            console.log('sign up error is', err.message);
        });
    }


    render(){

        const { email, username, password } = this.state
        return(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input name="email" value={email} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <label>Username</label>
                        <input name="username" value={username} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" value={password} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <button> Create an Account </button>
                </form>
            </div>
        )
    }
}

export default SignUp;
