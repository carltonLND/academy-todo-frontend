import axios from "axios";

const taskServer = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export interface TaskCandidate {
  content: string;
}

export interface Task extends TaskCandidate {
  id: number;
}

export async function getTasks(): Promise<Task[]> {
  const response = await taskServer.get("/tasks");
  return response.data;
}

export async function postTask(task: TaskCandidate) {
  await taskServer.post("/tasks", task);
}

export async function deleteTask(taskId: number) {
  await taskServer.delete(`/tasks/${taskId}`);
}
