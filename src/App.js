//import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";

function App() {
  //const tasksState = useSelector((state) => state.tasks); //esto era un ejemplo de como se usa el useselector en varios compoinentes
  //console.log(tasksState);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TasksForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=w2rAP7d6ndg&list=WL&index=1&t=11s  min 1:00.00 quedamos en funcion editar

// DOCUMENTACION REDUX TOOLKIT; https://redux-toolkit.js.org/tutorials/quick-start

// paso 1 instalar redux tolkit; npm install @reduxjs/toolkit react-redux

// uuid para general id unicos; npm i uuid
