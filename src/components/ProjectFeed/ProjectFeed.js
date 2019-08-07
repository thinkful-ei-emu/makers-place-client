// import React from 'react';
// import Project from './Project';

// function ProjectFeed (props) {
//   const project = props.store.map(item => {
//     return <Project key={item.id} id={item.id} title
//   })
// }


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectFeed extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/projects')
    .then(res => 
      res.json())
      .then(data => {
        this.props.setProjects(data)
      })
  }

  // renderProject() {
  //   const projectData = this.props.projects.map(project =>
  //     key={project.id}
  //     )
  // }
  
//no db, show data using .map for array of obj's in render.
//use data from server stored in state. map over it. display information on the page.

  render() {
    console.log(this.props.projects);
    return (
    <>
    <h1>Makers Place Feed</h1>

    <Link to='/'>
        Landing-
    </Link>
    
    <Link to='/home'>
      MyHome
    </Link>
        
        <div className='ProjectFeedItem_details'>

        <div className='ProjectFeedItem_text'>
          <h2 className='ProjectFeedItem_title'>Project Title</h2>
          <p className='ProjectFeedItem_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos.</p>
        </div>

        <div className='ProjectFeedItem_text'>
          <h2 className='ProjectFeedItem_title'>Project Title</h2>
          <p className='ProjectFeedItem_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos.</p>
        </div>

        <div className='ProjectFeedItem_text'>
          <h2 className='ProjectFeedItem_title'>Project Title</h2>
          <p className='ProjectFeedItem_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos.</p>
        </div>

        <div className='ProjectFeedItem_rate'>
          <p>[insert rate Component here]</p>
        </div>
      </div>
    </>
    )
  }
}