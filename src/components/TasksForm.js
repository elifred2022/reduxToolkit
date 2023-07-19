//import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid"; // genera id automaticos

function TasksForm() {
  // const stateTasks = useSelector((state) => state.tasks);
  //console.log(stateTasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      ></input>
      <textarea
        name="descriptions"
        type="text"
        placeholder="descriptions"
        onChange={handleChange}
      ></textarea>
      <button>save</button>
    </form>
  );
}

export default TasksForm;
