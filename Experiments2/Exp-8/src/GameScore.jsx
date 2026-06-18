import { useState } from 'react'
import './gameScore.css'

function GameScore() {
  const [count, setCount] = useState(0)

  return (
    <div className="game-score">
      <div className='count'>CURRENT SCORE : <strong>{count}</strong></div>

      <button className="score-btn" onClick={() => setCount(count + 1)}>
        Score a Point
      </button>
      <button className="lose-btn" onClick={() => setCount(count - 1)}>    
        Lose a Point
        </button>

     
    </div>
  )
}

export default GameScore