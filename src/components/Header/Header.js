import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {

handleLogoutClick = () => {
  TokenService.clearAuthToken()
  console.log('test')
  window.location.href = '/feed';
  }

renderLogoutLink() {
  return (
    <div className='logout-container'>
      <button className='addButton' 
        onClick={e => window.confirm("Are you sure you want to logout?") 
        && this.handleLogoutClick(e)}>Logout
        </button>
    </div>
  )
}

renderLoginLink() {
  return (
      <div className='logout-container'>
        <Link
          to='/login'>
          <button className='addButton'>Log in</button>
        </Link>
        <Link
          to='/register'>
          <button className='addButton'>Register</button>
        </Link>
      </div>
    )
}

  render() {
    return <>
    <nav className='header-nav'>
      <div className='header-makers-title-container'>
        <h1 className='header-makers-title'><Link to ='/feed'>Makers Place</Link></h1>
      </div>

      <div className='nav-buttons'>
        <div className='addProject-container'>
        <Link to ='/addproject'><button className='addButton'>Add Project</button></Link>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

      </div>
    </nav>
    </>  
  }
}