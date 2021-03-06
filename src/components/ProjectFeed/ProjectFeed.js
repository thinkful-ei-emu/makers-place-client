import React, { Component } from 'react';
import config from '../../config'
import './ProjectFeed.css';

export default class ProjectFeed extends Component {

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/projects`)
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
    return (
    <>
        {
          this.props.arrProjects.map(proj => {
          return (
            <div className='ProjectFeedItem_details' key={proj.id}>
              
              <h3 className='ProjectFeedItem_title'>{proj.title}</h3>
             
              <p className='ProjectFeedItem_description'>{proj.description}</p>
              
              <div className='ProjectFeedItem_img_url'> 
                <img src={proj.img_url} alt="Smiley face"/> 
              </div>

            </div>
          )
        })
        }
    </>
    )
  }
}