import React, { useContext, useState } from 'react'
import Quiz from '../Questions/quizQuestion.json'
import {Link} from 'react-router-dom'
function Quizpage({latestScore,latestCount}) {
    const[count,setCount]=useState(0)
    const[correct,iscorrect]=useState(0)
    const IncreaseQuestionCount = (e)=>{
        if(count<14){
            setCount(prev=>prev+1)
        }
        if(count<15){
            if(e==Quiz[count].answer){
                alert("Correct Answer")
                iscorrect(correct+1)
            }else{
                alert("Wrong Answer")
            }
        }
        
    }
    const add=()=>{
        if(count==Quiz.length-1){
            setCount(14)
        }else{
            setCount(count+1)
        }
    }
    const quit=()=>{
        alert("Are you sure want to Exit?")
    }
    const dec=()=>{
        if(count==0){
            setCount(Quiz.length-1)
        }else{
            setCount(count-1)
        }
    }
    const finish=()=>{
        latestScore(correct)
        latestCount(count)
    }


    return(
        <div className="container">
            <div className="head">
                <h2>Question</h2>
                <p className="para">{count +1} of 15</p>
                <h4>{Quiz[count].question}</h4>
            </div>
            <div className="buttons">
            <ol className="button-collection">
                <li><button onClick={()=>{IncreaseQuestionCount(Quiz[count].optionA)}} className="btns">{Quiz[count].optionA}</button></li>
                <li><button onClick={()=>{IncreaseQuestionCount(Quiz[count].optionB)}} className="btns">{Quiz[count].optionB}</button></li>
                <li><button onClick={()=>{IncreaseQuestionCount(Quiz[count].optionC)}} className="btns">{Quiz[count].optionC}</button></li>
                <li><button onClick={()=>{IncreaseQuestionCount(Quiz[count].optionD)}} className="btns">{Quiz[count].optionD}</button></li>
            </ol>
        </div>
            <div className="bottom">
                <div className="flex">
                <button className="btn3" onClick={dec} disabled={count === 0}>Previous</button>
                <button className="btn4" onClick={add} disabled={count === 14}>Next</button>
                <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
                    <button className="btn5" onClick={quit}>Quit</button>
                </Link>
                <Link to={`/Result`} style={{textDecoration:"none",color:"white"}}>
                    <button onClick={finish} className='btn6'>Finish</button>
                </Link>
                </div>
            </div>

        </div>
    )
}

export default Quizpage;