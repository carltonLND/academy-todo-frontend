import "./App.css";
import { getTasks, Task } from "../core/requests";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  return (
    <>
      {tasks &&
        tasks.map((t) => (
          <div key={t.id}>
            {t.id}: {t.task}
          </div>
        ))}
    </>
  );
}

export default App;
