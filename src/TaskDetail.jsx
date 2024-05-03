import { useParams } from "react-router-dom";

function TaskDetail({ tasks }) {
  const { taskId } = useParams();
  const task = tasks[taskId];

  if (Object.keys(task).length === 0) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <p>Title: {tasks.tile}</p>
      <p>Description: {task.description}</p>
      <p>ID: {task._id}</p>
    </div>
  );
}

export default TaskDetail;
