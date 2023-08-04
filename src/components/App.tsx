import "./App.css";
import { useTasks } from "../hooks/tasks";
import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, newTask, removeTask, isLoading] = useTasks();

  console.log("APP RENDER");

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
