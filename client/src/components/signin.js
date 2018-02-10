import React, { Component } from 'react';
import axios from 'axios';


class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
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

        axios.post('http://localhost:9000/auth/signin', this.state).then(resp =>{
            console.log('sign in response is ', resp);
        }).catch(err=>{
            console.log('sign in error is', err.message);
        });
    }


    render(){

        const { email, password } = this.state
        return(
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input name="email" value={email} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" value={password} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <button> Sign In </button>
                </form>
            </div>
        )
    }
}

export default SignIn;
