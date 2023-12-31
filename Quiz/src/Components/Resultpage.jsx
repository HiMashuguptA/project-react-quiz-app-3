import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
function Resultpage({score,count}) {
  return (
    <>
        <h1 className="heading">Result</h1>
        <div className="result">
          <h3 className="status">{score<5?"You need more Practice":score>5 || score<10?"Need Some Serious Practice":score>10 || score<14? "You can Do It":"You Finally Did It🫡"}</h3>
          <h2 className="score">Your score is {score}</h2>
          <div className="score-container">
            <div>
              <p>Total number of questions</p>
              <p>Number of attempted questions</p>
              <p>Number of correct answers</p>
              <p>Number of wrong answers</p>
            </div>
            <div>
              <p>15</p>
              <p>{count+1}</p>
              <p>{score}</p>
              <p>{15-score}</p>
            </div>
          </div>
          <Link to={'/Quiz'}>
            <button className="play Again">Play Again</button>
          </Link>
          <Link to={'/'}>
            <button className="play home">Back to home</button>
          </Link>
        </div>
      </>
  )
}

export default Resultpage