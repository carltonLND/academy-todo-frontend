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

  const refreshTasks = () => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    getTasks().then((tasks) => setAllTasks(tasks));
    clearInterval(loadingTimer);

    setIsLoading(false);
  };

  const addTask = async (task: TaskCandidate) => {
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

  return { allTasks, addTask, removeTask, isLoading };
}
