import { Route, Routes } from "react-router-dom";

import tasks from "../data";

import Home from "./Home";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tasks" element={<TaskList tasks={tasks} />}></Route>
        <Route
          path="/tasks/:taskId"
          element={<TaskDetail tasks={tasks} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
