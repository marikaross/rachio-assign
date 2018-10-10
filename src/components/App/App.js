import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form/Form.js';
import ZoneContainer from '../ZoneContainer/ZoneContainer.js';
import id from '../key.js';
import { cleanZones } from '../helper.js';
require('./App.css');


class App extends Component {
  constructor() {
    super()
    this.state = {
      zones: []
    }
  }

  async componentDidMount() {
    // const url = `https://api.rach.io/1/public/person/${id}`
    await this.fetchZoneInfo()
  }

  async fetchZoneInfo() {
    const url = `https://api.rach.io/1/public/person/${id}`
    const response = await fetch(url)
    const result = response.json()
    const cleanedZones = cleanZones(result)
    this.setState({zones: [...cleanedZones]})
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