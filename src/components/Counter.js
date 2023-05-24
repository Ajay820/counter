import React from 'react'

import { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
      return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=>{setCount(count + 1)}}>Increase</button>
        <span>{count}</span>
        <button onClick={()=>{setCount(count -1 )}}>Decrease</button>
    </div>
  )
}
