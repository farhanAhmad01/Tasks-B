import "./App.css";
import Project1 from "./Component/Project 1";
import Project2 from "./Component/Project 2";
import Project3 from "./Component/Project 3";
import Project4 from "./Component/Project 4";
import Project6 from "./Component/Project 6";

function App() {
  return (
    <div className="App">
      
      {/* Project1 is counter with useState */}
      <Project1/>

      {/* Project2 is counter with useReducer */}
      {/* <Project2/> */}

      {/* Project6 is a project that fetch jokes from an api*/}
      {/* <Project6 /> */}

       {/* Project3 is  counter with setTimeout*/}
      {/* <Project3/> */}

      {/* Project4 is Todo App */}
       {/* <Project4/>       */}
    </div>
  );
}

export default App;
