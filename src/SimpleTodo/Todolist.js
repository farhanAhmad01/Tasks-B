import React, { useState } from "react";

function Todolist() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [condit, setCondit] = useState(false);
  const [editInput, setEditInput] = useState("");
  const add = () => {
    if (input === "") {
    } else {
      setList([...list, input]);
      setInput("");
    }
  };

  const EditTodo = () => {
    if (editInput == "") {
    } else {
      setList([...list, editInput]);
      setCondit(false);
      setEditInput("");
    }
  };

  const Delete = (id) => {
    let filter = list.filter((userList, listIndex) => {
      return listIndex === id;
    });
    setList(filter);
  };
  const Edit = (id) => {
    setCondit(true);
    setEditInput(list[id]);
    // console.log("edit", editInput);
    setList(
      list.filter((user, userId) => {
        return userId !== id;
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={condit ? editInput : input}
        onChange={
          condit
            ? (e) => setEditInput(e.target.value)
            : (e) => setInput(e.target.value)
        }
      />
      <button onClick={condit ? EditTodo : add}>
        {condit ? "EditTodo" : "AddTodo"}
      </button>
      {list &&
        list.map((user, index) => {
          return (
            <>
              <p key={index}>{user}</p>
              <button onClick={() => Delete(index)}>Delete</button>
              <button onClick={() => Edit(index)}>Edit</button>
            </>
          );
        })}
    </div>
  );
}

export default Todolist;
