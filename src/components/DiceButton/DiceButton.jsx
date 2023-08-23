import React from 'react'
import Dice from './Dice'
import style from './DiceButton.module.scss'
import diceSfx from "../../assets/sounds/dice.mp3"
import useSound from 'use-sound'

export default function DiceButton({score, eyes, KastTerning, children, className}) {
  const [play] = useSound(diceSfx, { volume: 0.10 })

  return (
    <div className={`${style.diceButton} ${className={}}`}>
        {children}
        <button
        onClick={() => {
          KastTerning()
          play()
        }}
        >
            <Dice eyes={eyes} />
        </button>
    </div>
  )
}
