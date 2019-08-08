import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import LandingPage from '../Landing/Landing';
//import LoginForm from '../LoginForm/LoginForm';
import ProjectFeed from '../ProjectFeed/ProjectFeed';
//import UserHome from '../UserHome/UserHome';
import AddProject from '../ProjectFeed/AddProject';


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

  // postProjects = adding => {
  //   this.setState({  })
  // }

  render() {
    return ( 
      <div className="App">
        <header className='App_Header'>
          <Header/>
        </header>

        <main className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/feed'} render={(props) => <ProjectFeed {...props} arrProjects={this.state.projects} setHotdog={this.setProjects}/>} />
          {/* <Route path={'/home'} component={UserHome} /> */}
          <Route path={'/addproject'} component={AddProject} />
        </Switch>
        </main>
      </div>
    )
  }
}