import React, { useState, useEffect} from 'react'

import { API } from 'aws-amplify'

import logo from './logo.svg';
import './App.css';

function App() {

  const [coins, updateCoins] = useState([])
  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins')
    updateCoins(data.coins)
  }

  useEffect(() => {
    fetchCoins()
  }, [])

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
        <h2>Crypto pricing</h2>
        {
          coins.map((coin, index) => (
            <div key={index}>
              <h3>{coin.name} - {coin.symbol}</h3>
              <h5>${coin.price_usd}</h5>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
