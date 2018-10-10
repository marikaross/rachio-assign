import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form/Form.js';
import ZoneContainer from '../ZoneContainer/ZoneContainer.js';
import { id, key } from '../../key.js';
import { cleanZones } from '../helper.js';
require('./App.css');


class App extends Component {
  constructor() {
    super()
    this.state = {
      zones: []
    }
  }

  componentDidMount() {
    // const url = `https://api.rach.io/1/public/person/${id}`
    this.fetchZoneInfo()
  }

  fetchZoneInfo() {
    const url = `https://api.rach.io/1/public/person/${id}`
    fetch(url, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
      }
    })
      .then(response => response.json())
      .then(result => cleanZones(result))
      .then(result => this.setState({zones: [...result]}))
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Form />
        <ZoneContainer zones={this.state.zones} />
      </div>
      )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
  )