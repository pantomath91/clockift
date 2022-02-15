import React, { useState, useRef } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const interval = useRef(null);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(interval);
    setCount(0);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>ResetTimer</button>
      <button onClick={startTimer}>ResumeTimer</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
