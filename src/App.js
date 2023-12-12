import "./App.css";

import UseReducerCounter from "./Counter/UseReducerCounter";
import SimpleCounter from "./Counter/SimpleCounter";
import TimerCounter from "./Timer/TimerCounter";
import Todo from "./Todo/Todo";
import Joke from "./Joke/JokeApi";

function App() {
  return (
    <div className="App">
      
      {/* SimpleCounter is counter with useState */}
      <SimpleCounter/>

      {/* UseReducerCounter is counter with useReducer */}
      {/* <UseReducerCounter/> */}

      {/* JokeApi is a project that fetch jokes from an api* (ISSUE)  */}
      {/* <Joke/> */}

      {/* TimerCounter is  counter with setTimeout  */}
      {/* <TimerCounter/> */}

      {/* Todo is Todo App {}(ISSUE)*/}
       {/* <Todo/>       */}
    </div>
  );
}

export default App;
