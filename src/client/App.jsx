import { useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const response = await fetch('/api/hello')
    const data = await response.json()
    setMsg(data.message)
    setLoading(false)
  }
  

  return (
    <div>
    <h1>React App</h1>
    <p>{msg}</p>
    <button onClick={handleClick}>Click me</button>
  </div>
  )
}

export default App
