import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Homepage from '../Components/Homepage'
import Quizpage from '../Components/Quizpage'
import Resultpage from '../Components/Resultpage'
function Rotes() {
    const[count,setCount]= useState(0)
    const[score,setScore]=useState(0)
    const UpdateScore=(UpdatedScore)=>{
        setScore(UpdatedScore)
    }
    const UpdateCount=(UpdatedCount)=>{
        setCount(UpdatedCount)
    }
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Quiz' element={<Quizpage latestScore={UpdateScore} latestCount={UpdateCount}/>}/>
        <Route path='/Result' element={<Resultpage score={score} count={count}/>}/>
    </Routes>
  )
}

export default Rotes