import "./App.css";
import { getTasks, Task } from "../core/requests";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    fetchTasks();
  });

  return (
    <>
      {tasks.map((t, i) => (
        <div key={i}>{t.task}</div>
      ))}
    </>
  );
}

export default App;
