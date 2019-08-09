import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/makers-auth-service';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    handleLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    console.log('login ran');
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

  render() {
    return (
    <div className="fullscreen">
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>

      <div className='user_name'>
        <label htmlFor='LoginForm_user_name'>
          Username  
        </label><br/>
        <input name='user_name' placeholder='Username' id='loginForm_user_name' required></input><br/>
      </div>

      <div className='password'>
        <label htmlFor='loginForm_password'>
          Password
        </label><br/>
        <input type='password' name='password' id='loginForm_password' placeholder='Password' required></input><br/>
      </div>

        <button type='Submit'>Login</button>
      
      </form>

      <Link to='/feed'>
        <button>Skip</button>
      </Link>

    </div>
    )
  }
}