import React from 'react'

export default class AddProject extends React.Component {
  constructor() {
    super();



    this.state = {
      title: '',
      description: ''
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

  handleSubmit(e) {
    e.preventDefault();
    // const data = //form data;
    console.log('im in handle submit')
    console.log(this.state.title)
    console.log(this.state.description)
    const newProj = {
      title: this.state.title,
      description: this.state.description
    }
    console.log(newProj)
    fetch('http://localhost:8000/api/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProj)
  })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
    }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        
        <label htmlFor='Title'>Title:</label>
        <input id='formTitle' name='title' type='text' value={this.state.title}
        onChange={e => this.titleChanged(e.target.value)}/>
        
        <label htmlFor='description'>Description:</label>
        <input id='fromDescription' name='description'type='text' value={this.state.description}
        onChange={e => this.descriptionChanged(e.target.value)} />
        <button>Submit</button>
        
      </form>
      </>
    )
  }
}