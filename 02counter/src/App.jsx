import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // HOOK INTRODUCTION -----
  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Chai pe charcha</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button onClick={removeValue}
      >remove value</button>
      <p>Changes are here guys : {counter}</p>
      
    </>
  )
}

export default App
