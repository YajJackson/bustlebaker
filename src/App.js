import React, { Component } from 'react';

import './App.css';
import chef from './icons/chef.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bustle Baker</h1>
        <img 
          className='logo'
          src={chef}
          alt='Chef Logo'
        />
      </div>
    );
  }
}

export default App;
