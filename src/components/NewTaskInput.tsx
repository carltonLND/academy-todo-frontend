import { useState, useRef, useEffect } from "react";
import { TaskCandidate } from "../core/requests";

interface NewTaskInputProps {
  newTask: (t: TaskCandidate) => void;
  isDisabled: boolean;
}

export default function NewTaskInput({
  newTask,
  isDisabled,
}: NewTaskInputProps) {
  const [inputValue, setInputValue] = useState("");
  const inputField = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isDisabled && inputField.current) {
      inputField.current.focus();
    }
  }, [isDisabled]);

  const handleClick = () => {
    setInputValue("");
    if (inputValue.length !== 0) {
      newTask({ content: inputValue });
    }
  };

  return (
    <div className="new-task-container">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.slice(0, 128))}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
        disabled={isDisabled}
        ref={inputField}
      ></textarea>
      <button onClick={handleClick}>Post</button>
    </div>
  );
}
