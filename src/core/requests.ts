import axios from "axios";

const taskServer = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

// "https://todo-backend-ggbb.onrender.com"
// "http://localhost:4000"

export interface Task {
  task: string;
}

export interface ITask extends Task {
  id: number;
}

export async function getTasks(): Promise<ITask[]> {
  const response = await taskServer.get("/tasks");
  return response.data;
}

export async function postTask(task: Task) {
  await taskServer.post("/tasks", task);
}

export async function deleteTask(taskId: number) {
  await taskServer.delete(`/tasks/${taskId}`);
}
