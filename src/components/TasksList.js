import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
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
