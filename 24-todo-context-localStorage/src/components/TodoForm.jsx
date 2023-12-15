import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const { updateTodos } = useTodo();

  function addTodo(e) {
    e.preventDefault();
    updateTodos(todoText);
    setTodoText("");
  }

  return (
    <form className="flex" onSubmit={addTodo}>
      <input
        value={todoText}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
