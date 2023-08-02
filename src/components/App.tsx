import "./App.css";
import { getTasks, postTask, ITask } from "../core/requests";
import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<ITask[]>();

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const postThenFetch = async () => {
    await postTask({ task: inputValue });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleClick = () => {
    setInputValue("");
    postThenFetch();
  };

  return (
    <>
      {tasks &&
        tasks.map((t) => (
          <div key={t.id}>
            {t.id}: {t.task}
          </div>
        ))}
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleClick() : null)}
        />
        <button onClick={handleClick}>Create Task</button>
      </div>
    </>
  );
}

export default App;
