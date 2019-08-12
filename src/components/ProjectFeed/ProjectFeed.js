import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './ProjectFeed.css';

export default class ProjectFeed extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/projects')
    .then(res => 
      res.json())
      .then(data => {
        this.props.setProjectsVar(data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.props.arrProjects);
    return (
    <>
      <h1>Makers Place Feed</h1>
      
        {
          this.props.arrProjects.map(proj => {
          return (
            <div className='ProjectFeedItem_details' key={proj.id}>
              
              <h3 className='ProjectFeedItem_title'>{proj.title}</h3>
             
              <p className='ProjectFeedItem_description'>{proj.description}</p>
              
              <div className='ProjectFeedItem_img_url'> 
                <img src={proj.img_url} alt="Smiley face"/> 
              </div>

                <div className='ProjectFeedItem_rate'>
                </div>
            </div>
          )
        })
        }
    </>
    )
  }
}