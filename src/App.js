//import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";

function App() {
  //const tasksState = useSelector((state) => state.tasks); //esto era un ejemplo de como se usa el useselector en varios compoinentes
  //console.log(tasksState);

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TasksForm />} />
            <Route path="/edit-task/:id" element={<TasksForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=w2rAP7d6ndg&list=WL&index=1&t=11s  min 1:00.00 quedamos en funcion editar

// DOCUMENTACION REDUX TOOLKIT; https://redux-toolkit.js.org/tutorials/quick-start

// paso 1 instalar redux tolkit; npm install @reduxjs/toolkit react-redux

// uuid para general id unicos; npm i uuid

// ESTILOS, SE USO TAILWINDCSS;
// INSTALACION
// npm install -D tailwindcss
// npx tailwindcss init

// SOLO FALTA HACER EL LOCAL STORAGE, LUEGO SE LO HAGO 17/8/23
