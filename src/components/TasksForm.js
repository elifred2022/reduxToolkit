//import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid"; // genera id automaticos
import { useNavigate, useParams } from "react-router-dom"; // esto es para que una vez se carguen el formulario lo redireccione automatico al "/" y se pinte lo q se va cargando

function TasksForm() {
  // const stateTasks = useSelector((state) => state.tasks);
  //console.log(stateTasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // esto es para que una vez se carguen el formulario lo redireccione automatico al "/" y se pinte lo q se va cargando
  const params = useParams(); // esto es para buscar el id en el useEffect y poder usarlo para editar
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/"); // esto es para que una vez se carguen el formulario lo redireccione automatico al "/" y se pinte lo q se va cargando
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }

    console.log(params);
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Tarea:
      </label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></input>

      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Descripcion:
      </label>
      <textarea
        name="description"
        type="text"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1">save</button>
    </form>
  );
}

export default TasksForm;
