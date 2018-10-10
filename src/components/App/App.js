import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form/Form.js';
require('./App.css');


class App extends Component {
  constructor() {
    super()
    this.state = {
      zones: []
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Form />
      </div>
      )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
  )