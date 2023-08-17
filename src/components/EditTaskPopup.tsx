import { useState, useRef, useEffect } from "react";
import { Task } from "../core/requests";

interface EditTaskPopupProps {
  task: Task;
  editTask: (taskId: number, task: Task) => void;
  setPrompt: (bool: boolean) => void;
}

export default function EditTaskPopup({
  task,
  editTask,
  setPrompt,
}: EditTaskPopupProps) {
  const [inputValue, setInputValue] = useState(task.content);
  const inputField = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputField.current) {
      inputField.current.selectionStart = inputField.current.value.length;
      inputField.current.selectionEnd = inputField.current.value.length;
      inputField.current.focus();
    }
  }, []);

  const handleEnter = () => {
    editTask(task.id, { ...task, content: inputValue });
    setPrompt(false);
  };

  const handleEscape = () => {
    setPrompt(false);
  };

  return (
    <div className="edit-task-container confirmation">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.slice(0, 128))}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleEnter();
          } else if (e.key === "Escape") {
            e.preventDefault();
            handleEscape();
          }
        }}
        ref={inputField}
      ></textarea>
      <div className="confirmation-btn-container">
        <button className="n" onClick={handleEscape}>
          Cancel
        </button>
        <button className="y" onClick={handleEnter}>
          Update
        </button>
      </div>
    </div>
  );
}
