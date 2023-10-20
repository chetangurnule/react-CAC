import { useState } from "react";

export default function AddTodo(props) {
  const { onAddTodo } = props;
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        className="border-2 border-black mx-3 rounded px-2 py-1"
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
        className=" bg-blue-300 border-2 border-black"
      >
        Add
      </button>
    </div>
  );
}
