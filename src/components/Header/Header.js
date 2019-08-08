import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return <>
    <nav className='Header'>
      <h1><Link to ='/feed'>Makers Place</Link></h1>
      <Link to ='/addproject'><button>Add Project</button></Link>
    </nav>
    </>  
  }
}