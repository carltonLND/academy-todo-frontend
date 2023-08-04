import { useEffect, useState } from "react";
import {
  getTasks,
  postTask,
  TaskCandidate,
  Task,
  deleteTask,
} from "../core/requests";

type NewTask = (task: TaskCandidate) => void;
type RemoveTask = (taskId: number) => void;

export function useTasksAPI(): [Task[], NewTask, RemoveTask, boolean] {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshTasks = async () => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    setTasks(await getTasks());
    clearInterval(loadingTimer);

    setIsLoading(false);
  };

  const newTask = async (task: TaskCandidate) => {
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
