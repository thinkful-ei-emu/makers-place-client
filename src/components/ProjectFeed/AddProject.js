import React from 'react'

export default class AddProject extends React.Component {

  render() {
    return (
      <>
      <form>
        <label>
          Title:
          <input type='text' name='name' />
          Description:
          <input type='text' name='name' />
          <input type='submit' value='Submit' />
        </label>
      </form>
      </>
    )
  }
}