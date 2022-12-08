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
      
      There will be 15 question & 40 seconds to answer each one of them.
      test your knowledge and have fun.
    
      </summary>

      </div>

    </div>
  )
}

export default Start