import React, { useState } from 'react'

// counter task with simple useState

function SimpleCounter() {
  const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={()=> {setCount(count+1)}}>+</button>
        <button onClick={()=> {setCount(count-1)}}>-</button>
        <button onClick={()=> {setCount(0)}}>Reset</button>
    </div>
  )
}

export default SimpleCounter