import { useState } from "react";

export default function TaskList({ todos, onDeleteTodo, onChangeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onChangeTodo={onChangeTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onDeleteTodo, onChangeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          className="border-2 border-black mx-3 rounded px-2 py-1"
          type="text"
          value={todo.title}
          onChange={(e) => {
            onChangeTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="border-2 border-black"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button
          className="px-3 py-2 border-2 border-black"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label className=" flex gap-x-3 m-3 justify-left items-center">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChangeTodo({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button
        className=" bg-blue-300 px-3 py-2 border-2 border-black"
        onClick={() => {
          onDeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </label>
  );
}
