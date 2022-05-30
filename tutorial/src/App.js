import React from 'react'
// import UseStateArray from './tutorial/1-useState/setup/3-useState-array.js'
import UseStateObject from './tutorial/1-useState/setup/4-useState-object.js'
// import ErrorExample from './tutorial/1-useState/setup/1-error-example'
// import UseStateBasics from './tutorial/1-useState/setup/2-useState-basics'
// import Counter from './tutorial/Counter'

function App() {
  return (
    <div className='container'>
      <h1>Advanced Tutorial</h1>
      {/* <UseStateBasics /> */}
      {/* <ErrorExample /> */}
      {/* <Counter /> */}
      {/* <UseStateArray /> */}
      <UseStateObject />
    </div>
  )
}

export default App

// use
// component name must be uppercase
// must be in the fn/component body
// cannot call conditionally
// useState returns a pair, the current state value and a fn that lets you update it.
// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
