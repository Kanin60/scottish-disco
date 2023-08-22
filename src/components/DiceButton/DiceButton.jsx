import React from 'react'
import Dice from './Dice'

export default function DiceButton({score, eyes, KastTerning, children, className}) {

  return (
    <div className={className}>
        {children}
        <button
        onClick={() => KastTerning()}
        >
            <Dice eyes={eyes} />
        </button>
    </div>
  )
}
