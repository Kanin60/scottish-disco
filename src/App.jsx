import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiceButton from './components/DiceButton/DiceButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DiceButton eyes={3} score={10} />
    </>
  )
}

export default App
