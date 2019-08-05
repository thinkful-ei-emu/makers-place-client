import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../components/LoginForm/LoginForm';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Link to={'/feed'}>
          feed
        </Link>
      </>
    )
  }
}