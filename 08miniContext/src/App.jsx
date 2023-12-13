import Login from './components/Login'
import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Chai pe Charcha</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
