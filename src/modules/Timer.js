import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(JSON.parse(localStorage.getItem("elapsedTime")) || 0);
  const [startTime,  setStartTime] = useState(time)


  useEffect(() => {
    localStorage.setItem("elapsedTime", elapsedTime);
  }, [elapsedTime]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            setElapsedTime((elapsedTime) => elapsedTime + 1500);
            return 1500;
          } else {
            setElapsedTime((elapsedTime) => elapsedTime + (1/2));
            return time - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleChange = (event) => {
    const time = event.target.value;
    setStartTime(time*60)
    setTime(time*60)
  }

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(1500);
    setIsRunning(false);
    setElapsedTime(0);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const eminutes = Math.floor(elapsedTime/60);
  const eseconds = elapsedTime%60;

  return (
    <div>
      <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
      <input className="userInput"
      type="number"
      value = {startTime / 60}
      onChange={handleChange}
      />
      <h2>Elapsed Time: {eminutes}:{eseconds < 10 ? `0${eseconds}` : eseconds}</h2>
    </div>
  );
}

export default Timer;