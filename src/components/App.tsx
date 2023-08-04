import "./App.css";
import { useTasksAPI } from "../hooks/useTasksHook";
import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";

export default function App() {
  const tasks = useTasksAPI();

  return (
    <section className="todo-app">
      <h1>TODO Application</h1>
      {tasks.isLoading && (
        <section className="confirmation-container">
          <h1>Connecting to server...</h1>
        </section>
      )}
      <NewTaskInput newTask={tasks.addTask} />
      <TaskList tasks={tasks.allTasks} removeTask={tasks.removeTask} />
    </section>
  );
}
