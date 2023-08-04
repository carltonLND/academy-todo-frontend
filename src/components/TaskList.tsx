import { Task } from "../core/requests";
import TaskView from "./TaskView";

interface TaskListProps {
  tasks: Task[];
  removeTask: (taskId: number) => void;
}

export default function TaskList({
  tasks,
  removeTask,
}: TaskListProps): JSX.Element {
  return (
    <div className="task-list-container">
      {tasks.map((t) => (
        <TaskView key={t.id} task={t} removeTask={removeTask} />
      ))}
    </div>
  );
}
