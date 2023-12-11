import { useCallback, useState } from "react";
import "./App.css";
import Task from "./task";

const App = () => {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleTask = useCallback(() => {
    console.log("handletask rendered");
    setTask((prev) => [...prev, taskValue]);
  }, [taskValue]);

  const handleInputChange = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <div>
      <div className="firstDiv">
        <input
          type="text"
          placeholder="Enter a new task in Task component"
          value={taskValue}
          onChange={handleInputChange}
        />
        <button onClick={handleTask}>ADD</button>
        <Task tasks={task} handleTask={handleTask} />
        <button onClick={increment}>Increment</button>
        Count: {count}
      </div>
    </div>
  );
};

export default App;
