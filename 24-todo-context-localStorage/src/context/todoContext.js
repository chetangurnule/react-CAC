import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [],
  updateTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  completedTodo: () => {},
});

export const TodoProvider = todoContext.Provider;

export function useTodo() {
  return useContext(todoContext);
}
