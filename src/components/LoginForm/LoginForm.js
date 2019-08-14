import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/makers-auth-service';
import { Button, Input } from '../Utils/Utils'
import { Link } from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    handleLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    }

    handleErrorMessage() {
      return (
        <div>
          <p>
            {this.state.error}
          </p>
        </div>
      )
    }

  render() {
    return (
    <div className="loginScreen">
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>

      <div className='user_name'>
        <label htmlFor='LoginForm_user_name'>
          Username  
        </label><br/>
        
        <Input 
          name='user_name' 
          placeholder='Username' 
          id='loginForm_user_name' 
          required>
        </Input><br/>
      </div>

      <div className='password'>
        <label htmlFor='loginForm_password'>
          Password
        </label><br/>
        <Input 
          type='password' 
          name='password' 
          id='loginForm_password' 
          placeholder='Password' 
          required>
        </Input><br/>
      </div>

      { this.state.error && this.handleErrorMessage() }

        <Button type='Submit'>Login</Button>
        <h1><Link className='Register'to ='/register'>Not a user yet? Register here!</Link></h1>
      </form>

    </div>
    )
  }
} 