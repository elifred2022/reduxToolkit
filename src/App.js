//import { useSelector } from "react-redux";
import "./App.css";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";

function App() {
  //const tasksState = useSelector((state) => state.tasks); //esto era un ejemplo de como se usa el useselector en varios compoinentes
  //console.log(tasksState);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <TasksForm />
      <TasksList />
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=w2rAP7d6ndg&list=WL&index=1&t=11s  min 53:09 quedamos config react router dom

// DOCUMENTACION REDUX TOOLKIT; https://redux-toolkit.js.org/tutorials/quick-start

// paso 1 instalar redux tolkit; npm install @reduxjs/toolkit react-redux

// uuid para general id unicos; npm i uuid
