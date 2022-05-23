import React, { useState } from 'react'

const UseStateBasics = () => {
  console.log(useState('hello world'))
  const value = useState(1)
  return <h2>useState basic example</h2>
}

export default UseStateBasics
