import { useState } from 'react'
import './gameScore.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="game-score">
      <div className='count'>CURRENT SCORE : <strong>{count}</strong></div>

<div className='btn-grp'>

      <button onClick={() => setCount(0)}>  
       Start Over
      </button>
      <button onClick={() => setCount(count + 1)}>
        Score a Point
      </button>
      <button onClick={() => setCount(count - 1)}>  
       Penalty
      </button>
</div>


     
    </div>
  )
}

export default App
