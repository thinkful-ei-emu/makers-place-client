import React from 'react';
import './AddProject.css';
import TokenService from '../../services/token-service';

export default class AddProject extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      img_url: '',
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  titleChanged(title) {
    this.setState({
      title
    });
  }

  descriptionChanged(description) {
    this.setState({
      description
    });
  }

  imgURLChanged(img_url) {
    this.setState({
      img_url
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:8000/api/projects';
    const newProj = {title: this.state.title, description: this.state.description, img_url: this.state.img_url}
    const options = {
      method: 'POST',
      body: JSON.stringify(newProj),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    };
    
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later')
        }
        this.props.history.push('/feed')
        return res.json()
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
     }

  render() {
    const error = this.state.error
      ? <div className='error'>{this.state.error}</div>
      : '';

    return (
      <div className="fullScreen">

      <h3>Add a new project!</h3>
      {error}
      <form onSubmit={this.handleSubmit}>
        
        <label htmlFor='Title'>Title:</label><br/>
        <input id='formTitle' name='title' type='text' value={this.state.title}
        onChange={e => this.titleChanged(e.target.value)} required/><br/>
        
        <label htmlFor='description'>Description:</label><br/>
        <input id='formDescription' name='description'type='text' value={this.state.description}
        onChange={e => this.descriptionChanged(e.target.value)} required /><br/>

        <label htmlFor='img_url'>Image URL</label><br/>
        <input id='formIMG' name='img_url'type='url' value={this.state.img_url}
        onChange={e => this.imgURLChanged(e.target.value)} required /><br/>

        <button>Submit</button>
        
      </form>

      </div>
    )
  }
}