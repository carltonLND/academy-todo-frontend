import { useState } from "react";
import { Task } from "../core/requests";

export default function NewTaskInput(props: { newTask: (t: Task) => void }) {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setInputValue("");
    props.newTask({ task: inputValue });
  };

  return (
    <div className="new-task-container">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleClick() : null)}
      />
      <button onClick={handleClick}>Create Task</button>
    </div>
  );
}
