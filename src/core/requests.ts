import axios from "axios";

export interface Task {
  id: number;
  task: string;
}

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://todo-backend-ggbb.onrender.com"
    : "http://localhost:4000";

export async function getTasks(): Promise<Task[]> {
  const response = await axios.get("/tasks");
  return response.data;
}
