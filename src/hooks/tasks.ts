import { useEffect, useState } from "react";
import { getTasks, postTask, Task, ITask, deleteTask } from "../core/requests";

type NewTask = (task: Task) => void;
type RemoveTask = (taskId: number) => void;

export function useTasks(): [ITask[] | undefined, NewTask, RemoveTask] {
  const [tasks, setTasks] = useState<ITask[]>();

  const refreshTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
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
    refreshTasks();
  }, []);

  return [tasks, newTask, removeTask];
}
