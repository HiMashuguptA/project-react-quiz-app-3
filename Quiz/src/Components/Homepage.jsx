import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div>
      <h2>Quiz App</h2>
      <Link to={'/Quiz'}>
        <button className='playbtn'>Play</button>
      </Link>
    </div>
  )
}

export default Homepage