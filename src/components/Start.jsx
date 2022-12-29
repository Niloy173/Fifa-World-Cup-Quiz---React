import React, { useRef } from 'react';

const Start = ({setName}) => {

  const inputRef = useRef();
  const handleClick = () => {
   inputRef.current.value &&  setName(inputRef.current.value)
  }
  return (
    
    <div className="startPage">

      <div className="center">

     
      
      <input ref={inputRef} type={"text"} placeholder="Enter your name" name='username' />
      <button className='btn btn-2' onClick={handleClick}>Start Quiz</button>

      <summary>
      
      There will be <span>15 question & 40 seconds</span> to answer each one of them.
      Also you can take <span>(50/50)</span> and <span>(STOP TIMER)</span> option for one time in case of help for any question.
      Test your knowledge and have fun.
    
      </summary>

      </div>

    </div>
  )
}

export default Start