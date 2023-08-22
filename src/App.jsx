import { useState } from 'react'
import './app.scss'
import DiceButton from './components/DiceButton/DiceButton'
import Modal from './components/modal/Modal'
import mand from '../src/assets/superhero2dreng.png'
import pige from '../src/assets/superhero1pige.png'


function App() {
  const [playerOne, setPlayerOne] = useState(0)
  const [playerTwo, setPlayerTwo] = useState(0)
  const [lastPlayer, setLastPlayer] = useState(false)
  const [winner, setWinner] = useState("")
  const [count, setCount] = useState(1)

  const randomNumber = (min, max) =>{
    return Math.floor(Math.random()
      * (max - min + 1)) + min
  }

  const kastTerning = () => {
    if(playerOne >= 10 || playerTwo >= 10){
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
    if(playerOne + number >= 10 ){
      setWinner("player 1 har vundet")
    }
    if(playerTwo + number >= 10){
      setWinner("player 2 har vundet")
    }
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
          <h1>fafs</h1>
          <p>gdds</p>
          <button>Reset</button>
        </Modal>}
    </div>
  )
}

export default App
