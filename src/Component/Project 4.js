import React, { useState } from "react";

const Project4 = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input !== "") {
      setTodos(input);
    }
    setInput('');
  };
  console.log(todos);
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo()}>Add</button>
        {/* <ul>
          {todos &&
            todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
        </ul> */}
      </div>
    </>
  );
};

export default Project4;
