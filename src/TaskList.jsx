import { Link } from "react-router-dom";

function TaskList({ tasks }) {
  return (
    <ul>
      {Object.values(tasks).map((task) => (
        <li key={task._id}>
          <Link to={`/tasks/${task._id}`}>{task.title}</Link>
          <p>{task._id}</p>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
