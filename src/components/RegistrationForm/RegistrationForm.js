import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/makers-auth-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }
  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className='reg-container'>
        <form
          className='RegistrationForm'
          onSubmit={this.handleSubmit}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          
          <div className='user_name'>
            <label htmlFor='RegistrationForm__user_name'>
              Username <Required />
            </label>
            <Input
              name='user_name'
              type='text'
              required
              id='RegistrationForm__user_name'>
            </Input>
          </div>

          <div className='password'>
            <label htmlFor='RegistrationForm__password'>
              Password <Required />
            </label>
            <Input
              name='password'
              type='password'
              required
              id='RegistrationForm__password'>
            </Input>
          </div>
      
          <Button type='submit'>
            Register
          </Button>
        </form>
      </div>
    )
  }
}