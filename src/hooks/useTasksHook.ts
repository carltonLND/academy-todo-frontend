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

  const withLoadingState = async <T>(
    callback: () => Promise<T>,
    delay = 1000
  ) => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, delay);

    const res = await callback();
    clearTimeout(loadingTimer);
    setIsLoading(false);
    return res;
  };

  const refreshTasks = async () => {
    return setAllTasks(await getTasks());
  };

  const addTask = (task: TaskCandidate) => {
    return withLoadingState(async () => {
      await postTask(task);
      await refreshTasks();
    });
  };

  const removeTask = (taskId: number) => {
    withLoadingState(async () => {
      await deleteTask(taskId);
      await refreshTasks();
    });
  };

  useEffect(() => {
    setTimeout(async () => {
      await refreshTasks();
      setIsLoading(false);
    }, 2000);
  }, []);

  return { allTasks, addTask, removeTask, isLoading };
}
