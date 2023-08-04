import "./App.css";
import { useTasksAPI } from "../hooks/useTasksHook";
import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, newTask, removeTask, isLoading] = useTasksAPI();

  return (
    <section className="todo-app">
      <h1>TODO Application</h1>
      {isLoading && (
        <section className="confirmation-container">
          <h1>Connecting to server...</h1>
        </section>
      )}
      <NewTaskInput newTask={newTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </section>
  );
}
