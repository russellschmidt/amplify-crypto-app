import React, { useState, useEffect} from 'react'

import { API } from 'aws-amplify'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Get ready to rock your genitalia right off
        </p>
        <a
          className="App-link"
          href="https://rusl.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit <strong><code>rusl.io</code></strong>
        </a>
      </header>

      <section>

      </section>
    </div>
  );
}

export default App;
