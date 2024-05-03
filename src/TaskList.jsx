import { Link } from "react-router-dom";

function TaskList({ tasks }) {
  if (Object.keys(tasks).length === 0) {
    return <div>Task not found</div>;
  }

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
