import React, { Component } from 'react'
import './App.css'

import chef from './icons/chef.png'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className='app-header'>
          <li>
            <img 
              className='App-logo'
              src={chef}
              alt='Chef Logo'
            />
          </li>
          <li>
            <h1>Bustle Baker</h1>
          </li>
        </ul>
        <Main />
      </div>
    );
  }
}

export default App;
