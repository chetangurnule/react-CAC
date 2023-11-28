import { useState } from "react";
import "./App.css";
import { createTodos } from "./utils";
import TodoList from "./TodoList";

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState("All");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
        <label>
          <input
            type="checkbox"
            value={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark Mode
        </label>
        <hr />
        <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
      </div>
    </>
  );
}
