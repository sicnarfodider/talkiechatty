import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sign_up } from '../actions';


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

        this.props.sign_up(this.state)
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
                    <button className="btn"> Create an Account </button>
                    <p className="red-text">{this.props.error}</p>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        error: state.user.error
    }
}

export default connect(mapStateToProps, { sign_up })(SignUp);
