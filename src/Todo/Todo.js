import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input !== "") {

      // here is issue => when i add button it insert input state into todos state but when i change input it remove previous state of todos and show new input
      
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

export default Todo;
