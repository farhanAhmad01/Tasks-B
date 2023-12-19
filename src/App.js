import "./App.css";

import UseReducerCounter from "./Counter/UseReducerCounter";
import SimpleCounter from "./Counter/SimpleCounter";
import TimerCounter from "./Timer/TimerCounter";
import JokeApi from "./Joke/JokeApi";
import RandomColor from "./Random Color/RandomColor";
import TodoAppWithColor from "./Todo/Todo";
import RandomColorGenerator from "./Random Color/RandomColor";
import ColorChangingBox from "./Random Color/RandomColor";
import TodoAppWithColorBoxes from "./Todo/Todo";
import Todolist from "./SimpleTodo/Todolist";
import LoginForm from "./LoginForm.js/LoginForm";

function App() {
  return (
    <div className="App">
      
      {/* SimpleCounter is counter with useState */}
      {/* <SimpleCounter/> */}

      {/* UseReducerCounter is counter with useReducer */}
      {/* <UseReducerCounter/> */}

      {/* JokeApi is a project that fetch jokes from an api* (ISSUE)  */}
      {/* <JokeApi/> */}

      {/* TimerCounter is  counter with setTimeout  */}
      {/* <TimerCounter/> */}

      {/* Todo is Todo App {}(ISSUE)*/}
       {/* <TodoAppWithColorBoxes/>       */}

       {/* <ColorChangingBox/> */}

       {/* <Todolist/> */}

       <LoginForm/>
    </div>
  );
}

export default App;
