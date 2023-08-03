import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header>
        <h1> task {tasks.length} </h1>
        <Link to="/create-task">create-task</Link>
      </header>
      {tasks.map((tasks) => (
        <div key={tasks.id}>
          <h3>{tasks.title}</h3>
          <p>{tasks.descriptions} </p>
          <button onClick={() => handleDelete(tasks.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
