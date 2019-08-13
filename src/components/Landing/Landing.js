import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

export default class Landing extends Component {

  render() {
    return (
    <div className="fullScreen">
      <h1>Welcome to Makers Place!</h1>
      <p>This app is a place where Makers, DIY'ers, and creators can share
        their projects. This is a place for inspiration and creativity.</p>
        
        <section>
        Testing Instructions:<br/>

        <p>You must be logged in to add a new project to the feed.</p>

        <p>When adding a new project, if you would like to post a picture of your project, the image
        must be hosted and have an img url</p>
      
        You can login with these testing credentials:<br/>
        Username: testuser<br/>
        Password: Password0!<br/>
        </section>

      <h3>OR</h3>

      <p>You can register a new user</p>
      
      <Link to='/login'>
        <button>Continue</button>
      </Link>
    </div>
    )
  }
}