import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./App.css');


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
      )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
  )