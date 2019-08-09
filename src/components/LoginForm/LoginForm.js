import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {}

  render() {
    return (
    <div className="fullscreen">
      <form className='LoginForm'>

      <div className='user_name'><br/>
        Username:<br/>
        <input type='text' name='Username' placeholder='Username' required></input><br/>
        Password:<br/>
        <input type='text' name='Password' placeholder='Password' required></input><br/>
        <input type='Submit' value='Submit'></input>
      </div> 
      </form>
      <Link to='/feed'>
        <button>Skip</button>
      </Link>
    </div>
    )
  }
}