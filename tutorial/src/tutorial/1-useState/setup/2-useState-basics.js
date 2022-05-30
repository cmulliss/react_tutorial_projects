import React, { useState } from 'react'
// useState is a fn
// component name must be uppercase

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }
  return (
    <>
      <h1>useState basic example</h1>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
