import React from 'react'
import './App.css'
import { getCpk } from './cpk'

function App() {
  const handleOnClick = async () => {
    const cpk = await getCpk()

    const tx = await cpk?.execTransactions([
      {
        to: '0x787665e881d07f691430ee1552da5fc3e97e5fd7',
        value: '1',
      },
    ])

    console.log({ tx, cpk })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleOnClick}>
          Go
        </button>
      </header>
    </div>
  )
}

export default App
