import React, { useState } from 'react'

const Counter = () => {
  // declare an new state variable which will call count
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  )
}

export default Counter
