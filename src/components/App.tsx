import "./App.css";
import { useTasks } from "../hooks/tasks";
import NewTaskInput from "./NewTaskInput";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, newTask, removeTask] = useTasks();

  return (
    <section className="todo-app">
      <h1>TODO Application</h1>
      <NewTaskInput newTask={newTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </section>
  );
}
