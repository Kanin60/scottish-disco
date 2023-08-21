import React from 'react'
import Dice from './Dice'

export default function DiceButton({score, eyes, KastTerning, children}) {

  return (
    <div>
        {children}
        <button
        onClick={() => KastTerning()}
        >
            <Dice eyes={eyes} />
        </button>
    </div>
  )
}
