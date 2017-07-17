import React, { Component } from 'react'
import './App.css'

import chef from './icons/chef.png'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bustle Baker</h1>
        <img 
          className='App-logo'
          src={chef}
          alt='Chef Logo'
        />
        <Main />
      </div>
    );
  }
}

export default App;
