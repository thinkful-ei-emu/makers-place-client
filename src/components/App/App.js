import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LandingPage from '../Landing/Landing';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
// import LoginForm from '../LoginForm/LoginForm';
import LoginPage from '../LoginPage/LoginPage';
import ProjectFeed from '../ProjectFeed/ProjectFeed';
import AddProject from '../ProjectFeed/AddProject';
import './App.css';

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

        <main className='App-container'>
        <Switch>

          <Route exact path={'/'} component={LandingPage} />

          <PublicOnlyRoute path={'/login'} component={LoginPage} />

          <PublicOnlyRoute path={'/register'} component={RegistrationPage} />

          <Route path={'/feed'} 
            render={(props) => 
              <ProjectFeed {...props} arrProjects={this.state.projects} 
                setProjectsVar={this.setProjects}/>
            }
          />

          <PrivateRoute path={'/addproject'} component={AddProject} />

        </Switch>
        </main>
      </div>
    )
  }
}