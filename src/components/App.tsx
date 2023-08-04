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
      {isLoading ? (
        <h1 style={{ padding: "3em" }}>...Connecting...</h1>
      ) : (
        <>
          <NewTaskInput newTask={newTask} />
          <TaskList tasks={tasks} removeTask={removeTask} />
        </>
      )}
    </section>
  );
}
