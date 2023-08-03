import { useEffect, useState } from "react";
import { getTasks, postTask, Task, ITask } from "../core/requests";

export function useTasks(): [ITask[], (t: Task) => void] {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const refreshTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const newTask = async (task: Task) => {
    await postTask(task);
    refreshTasks();
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return [tasks, newTask];
}
