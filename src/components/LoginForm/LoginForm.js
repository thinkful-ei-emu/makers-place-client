import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {

  render() {
    return (
    <>
      <form className='LoginForm'>

      <div className='user_name'><br/>
        User name:<br/>
        <input type='text' name='Username' value='Username'></input><br/>
        Password:<br/>
        <input type='text' name='Password' value='Password'></input><br/>
        <input type='Submit' value='Submit'></input>
      </div> 
      </form>
      <Link to='/feed'>
        <button>Skip</button>
      </Link>
    </>
    )
  }
}