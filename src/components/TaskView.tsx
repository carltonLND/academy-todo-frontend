import { Task } from "../core/requests";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";
import EditTaskPopup from "./EditTaskPopup";
import Popup from "./Popup";

interface TaskViewProps {
  task: Task;
  removeTask: (taskId: number) => void;
  editTask: (taskId: number, task: Task) => void;
}

export default function TaskView({
  task,
  removeTask,
  editTask,
}: TaskViewProps) {
  const [delPrompt, setDelPrompt] = useState(false);
  const [editPrompt, setEditPrompt] = useState(false);

  return (
    <div className="task-container">
      {delPrompt && (
        <Popup>
          <ConfirmationPopup
            question="Delete Task?"
            setPrompt={setDelPrompt}
            successFn={() => removeTask(task.id)}
          />
        </Popup>
      )}
      {editPrompt && (
        <Popup>
          <EditTaskPopup
            setPrompt={setEditPrompt}
            editTask={editTask}
            task={task}
          />
        </Popup>
      )}
      <div className="task-header">
        <h4 className="task-id">Task ID: {task.id}</h4>
        <div className="task-btn-container">
          <AiOutlineEdit
            className="task-edit-btn"
            onClick={() => setEditPrompt(true)}
          />
          <AiOutlineCloseCircle
            className="task-delete-btn"
            onClick={() => setDelPrompt(true)}
          />
        </div>
      </div>
      <div className="task-divider" />
      <div className="task-text-container">
        <p className="task-text">{task.content}</p>
      </div>
    </div>
  );
}
