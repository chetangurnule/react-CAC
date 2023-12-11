import { memo, useState } from "react";

const Task = ({ tasks, handleTask }) => {
  console.log("Task is rendered");

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Task);
