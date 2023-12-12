import "./App.css";

import UseReducerCounter from "./Counter/UseReducer Counter";
import SimpleCounter from "./Counter/Simple Counter 1";
import TimerCounter from "./Counter/Timer Counter";
import Todo from "./Todo/Todo";
import JokeApi from "./Joke Api/Joke Api";

function App() {
  return (
    <div className="App">
      
      {/* SimpleCounter is counter with useState */}
      <SimpleCounter/>

      {/* UseReducerCounter is counter with useReducer */}
      {/* <UseReducerCounter/> */}

      {/* JokeApi is a project that fetch jokes from an api* (ISSUE)  */}
      {/* <JokeApi /> */}

      {/* TimerCounter is  counter with setTimeout  */}
      {/* <TimerCounter/> */}

      {/* Todo is Todo App {}(ISSUE)*/}
       {/* <Todo/>       */}
    </div>
  );
}

export default App;
