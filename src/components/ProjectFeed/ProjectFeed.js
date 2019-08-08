import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectFeed extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/projects')
    .then(res => 
      res.json())
      .then(data => {
        this.props.setHotdog(data)
      })
  }
  
//no db, show data using .map for array of obj's in render.
//use data from server stored in state. map over it. display information on the page.

  render() {
    console.log(this.props.arrProjects);
    return (
    <>
      <h1>Makers Place Feed</h1>
      <Link to ='/addproject'><button>Add Project</button></Link>

        {this.props.arrProjects.map(proj => {
          return (
            <div className='ProjectFeedItem_details' key={proj.id}>
              <h3 className='ProjectFeedItem_title'>{proj.title}</h3>
              <p className='ProjectFeedItem_description'>{proj.description}</p>
                <div className='ProjectFeedItem_rate'>
                  <p>[IMG]</p>
                </div>
            </div>
          )
        })
        }
    </>
    )
  }
}