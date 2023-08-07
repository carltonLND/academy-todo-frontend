import { useState } from "react";
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

  const charLimit = 128;

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
        onChange={(e) => setInputValue(e.target.value.slice(0, charLimit))}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
        disabled={isDisabled}
      ></textarea>
      <button onClick={handleClick}>Post</button>
    </div>
  );
}
