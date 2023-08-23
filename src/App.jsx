import { useState } from 'react'
import './app.scss'
import DiceButton from './components/DiceButton/DiceButton'
import Modal from './components/modal/Modal'
import mand from '../src/assets/superhero2dreng.png'
import pige from '../src/assets/superhero1pige.png'
import winnerSfx from "./assets/sounds/winner.mp3"
import useSound from 'use-sound'

function App() {
  const [playerOne, setPlayerOne] = useState(0)
  const [playerTwo, setPlayerTwo] = useState(0)
  const [lastPlayer, setLastPlayer] = useState(false)
  const [winner, setWinner] = useState("")
  const [count, setCount] = useState(1)
  const [play] = useSound(winnerSfx, { volume: 0.10 })

  const randomNumber = (min, max) =>{
    return Math.ceil(Math.random(min)*max)
  }

  const kastTerning = () => {
    if(playerOne >= 20 || playerTwo >= 20){
      setPlayerOne(0)
      setPlayerTwo(0)
      return
    }
    const number = randomNumber(1, 6)
    setCount(number)
    sammenlagtScore(number)
  }
console.log(count);

  const sammenlagtScore = (number) => {
    if(lastPlayer){
      setLastPlayer(!lastPlayer)
      setPlayerOne(playerOne + number)
    } else {
      
      setPlayerTwo(playerTwo + number)
      setLastPlayer(!lastPlayer)
    }
    if(playerOne + number >= 20 ){
      play(winnerSfx)
      setWinner("player 1 har vundet")
    }
    if(playerTwo + number >= 20){
      play(winnerSfx)
      setWinner("player 2 har vundet")
    }
  }

      const resetGame = () => {
      console.log("ran");
      setPlayerOne(0)
      setPlayerTwo(0)
      setLastPlayer(false)
      setWinner("")
      count(0)
    }

  return (
    <div className={"mainContainer"}>
        <div className={"pink"}></div>
        <div className={"orange"}></div>
        <h1>Scottish Disco</h1>
        <div className={"cardGrid"}>
          <img className={'pige'} src={pige} alt="" />
          <img className={'dreng'} src={mand} alt="" />
          <div className={'Cantainer'}>
            <DiceButton KastTerning={kastTerning} eyes={count} score={playerOne} className={"cardOne"}>
              <div className="card">
                {winner && <p>{winner}</p>}
                <div>
                    <h3>Player 1</h3>
                    <p>Score:<br/> {playerOne}</p>
                </div>
              </div>
            </DiceButton>
            <DiceButton KastTerning={kastTerning} eyes={count} score={playerTwo} className={"cardTwo"}>
              <div className="card">
                {winner && <p>{winner}</p>}
                <div>
                    <h3>Player 2</h3>
                    <p>Score:<br/> {playerTwo}</p>
                </div>
              </div>
            </DiceButton>
          </div>
        </div>
        
        {winner && <Modal>
          <h2>
            {winner}
          </h2>
          <p>Spil igen?</p>
          <button
          onClick={resetGame}
          >
            Nyt spil
          </button>
        </Modal>}
    </div>
  )
}

export default App
