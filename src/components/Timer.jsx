import { useEffect, useState } from 'react';

const Timer = ({setStopGame,questionNumber}) => {
  const [stopwatch, setStopWatch] = useState(40);

  useEffect(() => {

    if(stopwatch === 0){
      setStopGame(true) // time finished
    }
    const interval = setInterval(() => {
      setStopWatch(prev => prev - 1)
    },1000)

    return () => clearInterval(interval);
  },[setStopGame,stopwatch]);


  useEffect(() => {
    setStopWatch(40)
  },[questionNumber])
  return stopwatch;
}

export default Timer