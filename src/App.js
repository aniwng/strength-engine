import React, { Component } from 'react';
import './App.css';

import Programs from './components/Programs/Programs';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Programs/>
      </div>
    );
  }
}

export default App;
