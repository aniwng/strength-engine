import React, { Component } from 'react';
import './App.css';

import Programs from './components/Programs/Programs';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
          <Programs/>
        </div>
      </div>
    );
  }
}

export default App;
