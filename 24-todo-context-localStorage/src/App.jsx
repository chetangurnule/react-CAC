import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 2,
      todoText: "hello ji",
      isCompleted: false,
    },
  ]);

  function updateTodos(todoText) {
    setTodos([...todos, { id: Date.now(), todoText, isCompleted: false }]);
  }

  function editTodos(id, todoText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todoText } : todo))
    );
  }

  function deleteTodos(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function completedTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
  return (
    <TodoProvider
      value={{ todos, updateTodos, editTodos, deleteTodos, completedTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */} <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
