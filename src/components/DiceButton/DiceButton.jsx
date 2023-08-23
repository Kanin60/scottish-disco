import React from 'react'
import Dice from './Dice'
import style from './DiceButton.module.scss'

export default function DiceButton({score, eyes, KastTerning, children, className}) {

  return (
    <div className={style.diceButton}>
        {children}
        <button
        onClick={() => KastTerning()}
        >
            <Dice eyes={eyes} />
        </button>
    </div>
  )
}
