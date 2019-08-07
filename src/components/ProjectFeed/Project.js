import React from 'react'

export default class Project extends React.Component {

  render() {
    return (
      <li key={this.props.id}>
        <h2>{this.props.title}</h2>
      </li>
    )
  }
}