import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../Landing/Landing';
import LoginForm from '../LoginForm/LoginForm';
import ProjectFeed from '../ProjectFeed/ProjectFeed';
import UserHome from '../UserHome/UserHome';

export default class App extends Component {
  render() {
    return ( 
      <div className="App">
       <header className='App_Header'>
          <Header/>
          <Link to='/login'>
            login
          </Link>
        </header>
        
        <main className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/login'} component={LoginForm} />
          <Route path={'/feed'} component={ProjectFeed} />
          <Route path={'/home'} component={UserHome} />
        </Switch>
        </main>
      </div>
    )
  }
}