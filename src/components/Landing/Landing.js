import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

export default class Landing extends Component {

  render() {
    return (
    <div className="fullScreen">
      <h1>Welcome to Makers Place</h1>
      <p>This app is a place where Makers, DIY'ers, and creators to share
        their projects. This is a place for inspiration and creativity.
        This is the Landing Page. The next page is the Login Page.
        After a succseful login you will be taken to the main feed for Makers Place.
        From there you can view all posted projects and rate the projects.
      </p>
      <Link to='/login'>
        <button>Continue</button>
      </Link>
    </div>
    )
  }
}