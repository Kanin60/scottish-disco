import React from 'react'
import Dice from './Dice'

export default function DiceButton({score, eyes, KastTerning}) {

  return (
    <div>
        <p>Score: {score}</p>
        <button
        onClick={() => KastTerning()}
        >
            <Dice eyes={eyes} />
        </button>
    </div>
  )
}
