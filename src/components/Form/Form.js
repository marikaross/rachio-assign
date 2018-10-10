import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props) 
      this.state= {
        zone: null,
        duration: null
      }
  }

  manageChange = (event) => {

  }

  manageSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.manageSubmit}>
        <select>
          <option value='zone-1'>Zone 1</option>
          <option value='zone-2'>Zone 2</option>
          <option value='zone-3'>Zone 3</option>
          <option value='zone-4'>Zone 4</option>
          <option value='zone-5'>Zone 5</option>
          <option value='zone-6'>Zone 6</option>
          <option value='zone-7'>Zone 7</option>
          <option value='zone-8'>Zone 8</option>
        </select>
        <input 
          value={this.state.duration}
          name='duration'
          onChange={this.manageChange}
          placeholder='enter time in minutes'
        />
        <button>Submit</button>

      )
  }
}

export default Form;