import { useState } from "react";
import { TaskCandidate } from "../core/requests";

export default function NewTaskInput(props: {
  newTask: (t: TaskCandidate) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const charLimit = 128;

  const handleClick = () => {
    setInputValue("");
    if (inputValue.length !== 0) {
      props.newTask({ content: inputValue });
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
      ></textarea>
      <button onClick={handleClick}>Post</button>
    </div>
  );
}
