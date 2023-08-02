import axios from "axios";

export interface ITask {
  id: number;
  task: string;
}

export interface Task {
  task: string;
}

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://todo-backend-ggbb.onrender.com"
    : "http://localhost:4000";

export async function getTasks(): Promise<ITask[]> {
  const response = await axios.get("/tasks");
  return response.data;
}

export async function postTask(task: Task) {
  await axios.post("/tasks", task);
}
