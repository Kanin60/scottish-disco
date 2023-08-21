import React from 'react'
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