import React from 'react'

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () => {
    title = 'hello'
    console.log(title)
  }
  return (
    <div className='container'>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </div>
  )
}

export default ErrorExample
