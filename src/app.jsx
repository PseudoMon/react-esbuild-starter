import React, { useState, useRef } from 'react'
import './base.css'

export default function App() {
  const [name, setName] = useState("")
  
  function handleInput(e) {
    setName(e.target.value)
  }

  return (
    <main>
      <header>
        <h1>React + ESBuild + Sakura Starter</h1>
      </header>
      <div>
        <p>This is as barebones a React stack I can make that's still nice and easy to use. Note that this does not have hot reloading (you gotta refresh your browser each time) because it's apparently hell to set up.</p>
        <p>Other than the hot-reloading issue, I can confirm that ESBuild is pog.</p>
        <p><input type="text" defaultValue={ name } placeholder="Insert name here" onInput={ handleInput }/></p>
        
        { name ?
          <p>Hello { name }!</p> : 
          null
        }
      </div>
    </main>
  )
}