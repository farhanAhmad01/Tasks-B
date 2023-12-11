import React, { useState } from "react";

// This is a counter that increment,decrement and reset with useState hook but increment,decre etc after 1 second of click

export default function Project3() {
  const [count, setCount] = useState(0);
  function increment() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }
  function decrement() {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }
  function reset() {
    setTimeout(() => {
      setCount(0);
    }, 1000);
  }

  return (
    <div>
      <h1>1Sec delay Counter</h1>
      <h3>{count}</h3>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
