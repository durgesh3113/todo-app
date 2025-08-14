import React from "react";
import Button from "./Button";
import { customButtonStyle, taskStyles } from "../Styles/styles";

const Task = (props) => {
  const { task, index, completeTask, removeTask } = props;
  return (
    <div
      style={{
        ...taskStyles,
        textDecoration: task.completed ? "line-through" : "none",
        opacity: task.completed ? 0.5 : 1,
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
    >
      <div className="book-card" style={{ width: "100%" }}>
        <div className="book-title">{task.text}</div>
        <div className="book-actions">
          <Button
            text={task.completed ? "Undo" : "Done"}
            handleOnClick={() => completeTask(index)}
            ownStyle={customButtonStyle}
          />
          <Button
            text={"Remove"}
            handleOnClick={() => removeTask(index)}
            ownStyle={customButtonStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
