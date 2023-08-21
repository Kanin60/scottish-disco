import React from 'react'
import {BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill} from "react-icons/bs"

export default function DiceButton({score, eyes, KastTerning}) {

    
    const getEyes = () => {
        switch(eyes) {
            case 1: 
                return <BsFillDice1Fill />
            case 2:
                return <BsFillDice2Fill />
            case 3:
                return <BsFillDice3Fill />
            case 4:
                return <BsFillDice4Fill />
            case 5:
                return <BsFillDice5Fill />
            case 6:
                return <BsFillDice6Fill />

        }
    }

  return (
    <div>
        <p>Score: {score}</p>
        <button
        onClick={() => KastTerning()}
        >
            {getEyes()}
        </button>
    </div>
  )
}
