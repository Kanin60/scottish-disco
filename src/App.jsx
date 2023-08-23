import { useState } from 'react'
import './app.scss'
import DiceButton from './components/DiceButton/DiceButton'
import Modal from './components/modal/Modal'
import mand from '../src/assets/superhero2dreng.png'
import pige from '../src/assets/superhero1pige.png'
import useSound from 'use-sound'
import winnerSfx from "./assets/sounds/winner.mp3"
import diceRoll from "./assets/sounds/dice.mp3"
import {BiReset, BiQuestionMark} from "react-icons/bi"
import {GrPowerReset} from "react-icons/Gr"


function App() {
  const [playerOne, setPlayerOne] = useState(0)
  const [playerTwo, setPlayerTwo] = useState(0)
  const [lastPlayer, setLastPlayer] = useState(false)
  const [winner, setWinner] = useState("")
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(1)
  const [playWinner] = useSound(winnerSfx, { volume: 0.15})
  const [playDice] = useSound(diceRoll, { volume: 0.15})
  const [openModal, setOpenModal] = useState(false)

  const randomNumber = (min, max) =>{
    return Math.ceil(Math.random(min)*max)
  }

  const kastTerning = () => {
    if(playerOne >= 20 || playerTwo >= 20){
      setPlayerOne(0)
      setPlayerTwo(0)
      setWinner('')
      return
    }
    playDice();
    const number = randomNumber(1, 6)
    !lastPlayer ? setCount(number) : setCount2(number)
    sammenlagtScore(number)
  }
console.log(count);

  const sammenlagtScore = (number) => {
    if(!lastPlayer){
      setLastPlayer(!lastPlayer)
      setPlayerOne(playerOne + number)
    } else {
      
      setPlayerTwo(playerTwo + number)
      setLastPlayer(!lastPlayer)
    }
    if(playerOne + number >= 20 ){
      playWinner()
      setWinner("player 1 har vundet")
    }
    if(playerTwo + number >= 20){
      playWinner()
      setWinner("player 2 har vundet")
    }
  }

  const resetGame = () => {
    setPlayerOne(0)
    setPlayerTwo(0)
    setLastPlayer(false)
    setWinner(false)
    setCount(1)
    setCount2(1)
  };

  return (
    <div className={"mainContainer"}>
        <div className={"pink"}></div>
        <div className={"orange"}></div>
        <h1>Scottish Disco</h1>
        <div className={"cardGrid"}>
          <img className={'pige'} src={pige} alt="" />
          <img className={'dreng'} src={mand} alt="" />
          <div className={'Cantainer'}>
            <DiceButton KastTerning={lastPlayer ? () => {} : kastTerning} eyes={count} score={playerOne} className={"cardOne"}>
              <div className="card">
                {winner && <p>{winner}</p>}
                {!winner && <div>
                    <h3>Player 1</h3>
                    <p>Score:<br/> {playerOne}</p>
                </div>}
              </div>
            </DiceButton>
            <DiceButton KastTerning={lastPlayer ? kastTerning : () => {}} eyes={count2} score={playerTwo} className={"cardTwo"}>
              <div className="card">
                {winner && <p>{winner}</p>}
                {!winner && <div>
                    <h3>Player 2</h3>
                    <p>Score:<br/> {playerTwo}</p>
                </div>}
              </div>
            </DiceButton>
          </div>
        </div>
        <button onClick={() => resetGame()} className={"resetBnt"}>
          <GrPowerReset />
        </button>
        <button onClick={() => setOpenModal(true)} className={"questionBnt"}>
          <BiQuestionMark />
        </button>
        
        {openModal && <Modal>
          <button onClick={() => setOpenModal(false)}>+</button>
          <h4>Scottish Disco - Spilleregler</h4>
          <p>
            "Scottish Disco" er et online terningespil designet til 2 spillere. Formålet med spillet er at være den første spiller til at opnå 20 point ved at kaste virtuelle terninger.
          </p>
          <h5>
            Spilforløb:
          </h5>
          <ul>
            <li>
              To spillere deltager i det samme spil.
            </li>
            <li>
              Spillerne skiftes til at kaste terninger ved at klikke på "Kast terning" knappen.
            </li>
            <li>
              Hver terningkast simulerer kastet af to seks-sidet terninger med tilfældige værdier fra 1 til 6.
            </li>
            <li>
              Resultatet af terningen summeres, og pointene beregnes
            </li>
          </ul>
          <h5>
            Vinder:
          </h5>
          <p>
            Den første spiller, der når eller overstiger 20 point, vinder spillet. Hvis en spiller rammer nøjagtigt 20 point, er det stadig den første spiller til at gøre det, der vinder.
          </p>
        </Modal>}
    </div>
  )
}

export default App
