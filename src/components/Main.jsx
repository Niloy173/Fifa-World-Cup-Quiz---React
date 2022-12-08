import React, { useEffect, useMemo, useState } from 'react';
import Timer from './Timer';


// import files
import correct from '../assets/src_sounds_correct.mp3';
import wrong from '../assets/src_sounds_wrong.mp3';

 
const Main = ({data,setStopGame,setQuestionNumber,questionNumber}) => {
  

  const [question, setQuestion] = useState(null);
  const [selectedanswer, setSelectedAnswer] = useState(null);
  const [classname, setClassname] = useState("answer");
  
  

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  },[data,questionNumber])

  const delayFunction = (duration, cb) => {
    setTimeout(() => {
      cb()
    }, duration);
  }

  const correct_answer = useMemo(()=>{
    return () => new Audio(correct).play()
  },[])

  const wrong_answer = useMemo(() => {
    return () =>  new Audio(wrong).play()
    
  },[])

  const clickedAnswer = (ans) => {
    setSelectedAnswer(ans);
    setClassname("answer active");
    // check the correct answer 
    // after clicking any option with in 1 seconds
    // update it with class "correct" or "wrong"
    delayFunction(2000,
    () => setClassname(ans.correct ? "answer correct": "answer wrong"))

    // after done with the animation
    // check wheither the answer is wrong or right
    // update the question or stop the game

    delayFunction(4000,
      () => {
        if(ans.correct){
          correct_answer()

          delayFunction(1000, () => {

            setQuestionNumber(prev => prev + 1)
            setSelectedAnswer(null)
          })
         
        }else{

          wrong_answer()

          delayFunction(1000, () => {
            setStopGame(true)
          })
         
        }
      }
    )
   

  }
  
  
  return (
    
    <>
     
      <div className="top">
        {/* timer class */}
        <div className="timer"><Timer setStopGame={setStopGame} questionNumber={questionNumber} /></div>
      </div>
      <div className="bottom">
        {/* question & answers */}
        
        <div className="fifa">
        
          <div className="question">{question?question.question: null}</div>
          <div className="answers">
          
             {
                question ? question.answer.map(ans => 

                  <div key={Math.random()} 
                  className={selectedanswer === ans ? classname : 'answer' } 
                  onClick={() => clickedAnswer(ans)}>
                  {ans.text}</div>

                  ):null
             }
             
          </div>
        
        </div>

      </div>

    </>
  )
}

export default Main