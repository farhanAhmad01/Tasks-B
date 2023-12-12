import React, { useReducer } from "react";

//Counter with useReducer


let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count</h1>
      <h3>{count}</h3>
      <button onClick={() => dispatch("Increment")}>+</button>
      <button onClick={() => dispatch("Decrement")}>-</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};
export default UseReducerCounter;
