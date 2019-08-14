import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/feed'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2 className='loginTitle'>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </Section>
    )
  }
}
 