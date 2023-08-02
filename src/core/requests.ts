import axios, { AxiosError } from "axios";

export interface Task {
  task: string;
}

axios.defaults.baseURL = "http://localhost:4000";

export async function getTasks(): Promise<Task[]> {
  try {
    const response = await axios.get("/tasks");
    return response.data;
  } catch (_e) {
    const e = _e as AxiosError;
    if (e.code && e.code !== "ECONNABORTED") {
      console.log("AXIOS ERROR", e.code);
    }
    return [];
  }
}
