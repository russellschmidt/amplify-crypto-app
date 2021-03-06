import React, { useState, useEffect} from 'react'

import { API } from 'aws-amplify'

import logo from './logo.svg';
import './App.css';

function App() {

  const [input, updateInput] = useState({
    limit: 5, start: 0
  })
  const [coins, updateCoins] = useState([])

  function updateInputValues(type, value) {
    updateInput({ ...input, [type]: value })
  }

  async function fetchCoins() {
    const {limit, start} = input
    const data = await API.get('cryptoapi', 
      `/coins?limit=${limit}&start=${start}`)
    updateCoins(data.coins)
  }

  useEffect(() => {
    fetchCoins()
  })

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
              <h5>{coin.name} - {coin.symbol}</h5>
              <p>Last Price: ${coin.price_usd}</p>
              <p>Daily Change: {coin.percent_change_24h}%</p>
            </div>
          ))
        }

        <div>
          <input
            onChange={e => updateInputValues('start', e.target.value)}
            placeholder="start"
          />
          <input 
            onChange={e => updateInputValues('limit', e.target.value)}
            placeholder="limit"
          />
          <button onClick={fetchCoins}>Fetch Coins</button>
        </div>
      </section>
    </div>
  );
}

export default App;
