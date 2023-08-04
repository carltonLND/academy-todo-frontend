import { useEffect, useState } from "react";
import { getTasks, postTask, Task, ITask, deleteTask } from "../core/requests";

type NewTask = (task: Task) => void;
type RemoveTask = (taskId: number) => void;

export function useTasks(): [ITask[], NewTask, RemoveTask, boolean] {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshTasks = async () => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    const tasks = await getTasks();
    clearInterval(loadingTimer);
    setTasks(tasks);

    setIsLoading(false);
  };

  const newTask = async (task: Task) => {
    await postTask(task);
    refreshTasks();
  };

  const removeTask = async (taskId: number) => {
    await deleteTask(taskId);
    refreshTasks();
  };

  useEffect(() => {
    setTimeout(refreshTasks, 2000);
  }, []);

  return [tasks, newTask, removeTask, isLoading];
}
