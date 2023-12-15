import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todoText: "Study Hard",
      isCompleted: false,
    },
  ],
  updateTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  completedTodo: () => {},
});

export const TodoProvider = todoContext.Provider;

export function useTodo() {
  return useContext(todoContext);
}
