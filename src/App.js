import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /** 
   * "function" used becuase it only contains a render method. e,g there were no sub functions intended 
   * for this class
   **/
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
