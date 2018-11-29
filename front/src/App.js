import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Colecao from './pages/colecao/Colecao';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Colecao />
      </div>
    );
  }
}

export default App;
