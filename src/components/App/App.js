import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../Landing/Landing';
//import LoginForm from '../LoginForm/LoginForm';
import ProjectFeed from '../ProjectFeed/ProjectFeed';
import UserHome from '../UserHome/UserHome';
//import DummyData from '../../DummyData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  setProjects = list => {
    this.setState({ projects:list })
  }

  render() {
    return ( 
      <div className="App">
        <header className='App_Header'>
          <Header/>
        </header>

        {/* <ProjectFeed store={this.state.store.projects}/>*/}
         
        <main className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          {/* <Route path={'/login'} component={LoginForm} /> */}
          {/*add, add component here*/}
          <Route path={'/feed'} render={() => <ProjectFeed arrProjects={this.state.projects} setHotdog={this.setProjects}/>} />
          <Route path={'/home'} component={UserHome} />
        </Switch>
        </main>
      </div>
    )
  }
}