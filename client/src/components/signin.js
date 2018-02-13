import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sign_in } from '../actions';

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

        this.props.sign_in(this.state)
    }


    render(){

        const { email, password } = this.state
        return(
            <div>
                <h1>Sign In</h1>
                <small><strong>email:</strong> testest@wootwoot.com || <strong>pass:</strong> test1</small>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input name="email" value={email} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" value={password} type="text" onChange={this.handleChange} ></input>
                    </div>
                    <button className="btn"> Sign In </button>
                    <p className="error red-text">{this.props.error}</p>
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

export default connect(mapStateToProps, { sign_in })(SignIn);
