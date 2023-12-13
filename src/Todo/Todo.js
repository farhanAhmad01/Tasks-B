import React, { useState } from 'react';

const TodoAppWithColorBoxes = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, color: 'lightgray' }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleBoxClick = (index) => {
    const updatedTasks = [...tasks];
    // Toggle between blue and the default color on click
    updatedTasks[index].color = updatedTasks[index].color === 'blue' ? 'lightgray' : 'blue';
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo App with Color-Changing Boxes</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            backgroundColor: task.color,
            border: '1px solid #ccc',
            margin: '10px',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onClick={() => handleBoxClick(index)}
        >
          <p>{task.text}</p>
          <button onClick={() => handleRemoveTask(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TodoAppWithColorBoxes;
