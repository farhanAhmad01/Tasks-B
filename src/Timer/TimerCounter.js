import React, { useEffect, useState } from "react";

// This is a counter that increment,decrement and reset with useState hook but increment,decre etc after 1 second of click

export default function TimerCounter() {
  const [count, setCount] = useState(0);
  const [condition, setCondition] = useState("");
  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (condition === "rise") {
        setCount(count + 1);
      } else if (condition === "low") {
        setCount(count - 1);
      }
    }, 1000);

    if (condition === "reset") {
      setCount(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [condition, count]);

  return (
    <div>
      <h1>1Sec delay Counter</h1>
      <h3>{count}</h3>
      <button onClick={() => setCondition("rise")}>+</button>
      <button onClick={() => setCondition("low")}>-</button>
      <button onClick={() => setCondition("reset")}>Reset</button>
    </div>
  );
}
