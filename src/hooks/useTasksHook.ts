import { useEffect, useState } from "react";
import {
  getTasks,
  postTask,
  TaskCandidate,
  Task,
  deleteTask,
} from "../core/requests";

interface TasksAPI {
  allTasks: Task[];
  addTask: (task: TaskCandidate) => void;
  removeTask: (taskId: number) => void;
  isLoading: boolean;
}

export function useTasksAPI(): TasksAPI {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshTasks = async () => {
    setAllTasks(await getTasks());
  };

  const addTask = async (task: TaskCandidate) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    await postTask(task);
    await refreshTasks();

    clearInterval(loadingTimer);
    setIsLoading(false);
  };

  const removeTask = async (taskId: number) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    await deleteTask(taskId);
    await refreshTasks();

    clearInterval(loadingTimer);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(async () => {
      const loadingTimer = setTimeout(() => {
        setIsLoading(true);
      }, 2000);

      await refreshTasks();

      clearInterval(loadingTimer);
      setIsLoading(false);
    }, 2000);
  }, []);

  return { allTasks, addTask, removeTask, isLoading };
}
