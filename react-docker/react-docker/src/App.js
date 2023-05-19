import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [state, setState] = useState(0)

  useEffect(() => {
    if (state === 0) document.title = `K8's for life!`
    else document.title = `${state}`
  }, [state])

  const clickHandler = () => {
    let data = state
    setState(data + 1)
  }

  const handlePost = () => {
    let data = state
    axios
      .post('http://localhost:3059/post', {
        count: data,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  return (
    <div className="App">
      <img
        src="data:image/png;base64,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"
        alt="equifax logo"
      />
      <button onClick={() => clickHandler()}>click me!</button>
      {state > 0 ? <h1 style={{ color: '#444' }}>{state}</h1> : <br />}
      <button onClick={() => handlePost()}>Send Data!</button>
    </div>
  )
}
