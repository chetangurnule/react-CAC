import { useState } from "react";
import "./App.css";
import AddTodo from "./addTodo";
import TaskList from "./taskList";

function App() {
  let nextId = 3;
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  //  function To handle adding todo
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  // function to handle deleting todo
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  // function to handle changing todo
  function handleChangeTodo(changedTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id == changedTodo.id) return changedTodo;
        else return todo;
      })
    );
  }
  return (
    <>
      <div
        className=" px-5 py-3  shodow-xl rounded"
        style={{ backgroundColor: "#c1d9d0" }}
      >
        <h1 className="my-5">Todo List</h1>
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </div>
    </>
  );
}

export default App;
