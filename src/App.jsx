import { useState } from 'react'
import './App.css'
import DiceButton from './components/DiceButton/DiceButton'
import { Bruger } from './components/Bruger/Bruger'

function App() {
  const [playerOne, setPlayerOne] = useState(0)
  const [playerTwo, setPlayerTwo] = useState(0)
  const [lastPlayer, setLastPlayer] = useState(false)
  const [count, setCount] = useState(1)

  const randomNumber = (min, max) =>{
    return Math.floor(Math.random()
      * (max - min + 1)) + min
  }

  const kastTerning = () => {
    const number = randomNumber(1, 6)
    setCount(number)
    sammenlagtScore(number)
  }
console.log(count);

  const sammenlagtScore = (number) => {
    setPlayerOne(playerOne + number)
  }

  return (
    <>
            
      <div className="card">
        <div>
            <p>Player One</p>
            <p>SCORE: {playerOne}</p>
        </div>
        <DiceButton KastTerning={kastTerning} eyes={count} score={playerOne} />
      </div>
    </>
  )
}

export default App
