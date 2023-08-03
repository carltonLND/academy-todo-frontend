import "./App.css";
import { useTasks } from "../hooks/tasks";
import NewTaskInput from "./NewTaskInput";

export default function App() {
  const [tasks, newTask] = useTasks();

  return (
    <>
      {tasks &&
        tasks.map((t) => (
          <div key={t.id}>
            {t.id}: {t.task}
          </div>
        ))}
      <NewTaskInput newTask={newTask} />
    </>
  );
}
