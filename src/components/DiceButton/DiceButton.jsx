import React from 'react'
import {BsFillDice1Fill, BsFillDice2Fill} from "react-icons/bs"

export default function DiceButton({score, eyes, KastTerning}) {
  return (
    <div>
        <p>Score: {score}</p>
        <button
        onClick={() => KastTerning()}
        >
            {eyes}
        </button>
    </div>
  )
}
