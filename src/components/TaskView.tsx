import { Task } from "../core/requests";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";

interface TaskViewProps {
  task: Task;
  removeTask: (taskId: number) => void;
}

export default function TaskView({ task, removeTask }: TaskViewProps) {
  const [prompt, setPrompt] = useState(false);

  return (
    <div className="task-container">
      {prompt && (
        <ConfirmationPopup
          setPrompt={setPrompt}
          successFn={() => removeTask(task.id)}
        />
      )}
      <div className="task-header">
        <h4 className="task-id">Task ID: {task.id}</h4>
        <AiOutlineCloseCircle
          className="task-delete-btn"
          onClick={() => setPrompt(true)}
        />
      </div>
      <div className="task-divider" />
      <div className="task-text-container">
        <p className="task-text">{task.content}</p>
      </div>
    </div>
  );
}
