import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>{time} sec</h1>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={() => {
        setTime(0);
        setIsRunning(false);
      }}>
        Reset
      </button>
    </div>
  );
}

export default Timer;