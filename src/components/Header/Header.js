import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {

handleLogoutClick = () => {
  TokenService.clearAuthToken()
}

  render() {
    return <>
    <nav className='header-nav'>
      <h1><Link to ='/feed'>Makers Place</Link></h1>
      <div className='nav-buttons'>
        <Link to ='/addproject'><button className='addButton'>Add Project</button></Link>
        <div className='logout-container'>
          <button className='addButton' onClick={this.handleLogoutClick}>Logout</button>
        </div>
      </div>
    </nav>
    </>  
  }
}