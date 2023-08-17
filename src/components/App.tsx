import "./App.css";
import { useTasksAPI } from "../hooks/useTasksHook";
import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";
import Popup from "./Popup";
import { AiOutlineGithub } from "react-icons/ai";

export default function App() {
  const tasks = useTasksAPI();

  return (
    <section className="todo-app">
      <div className="app-title">
        <h1>TODO Application</h1>
        <a
          className="source-link"
          href="https://github.com/carltonlnd-todo-frontend"
        >
          <AiOutlineGithub />
          Github
        </a>
      </div>
      {tasks.isLoading && (
        <Popup>
          <h1>Connecting to server...</h1>
        </Popup>
      )}
      <NewTaskInput newTask={tasks.addTask} isDisabled={tasks.isLoading} />
      <TaskList
        tasks={tasks.allTasks}
        removeTask={tasks.removeTask}
        editTask={tasks.editTask}
      />
    </section>
  );
}
