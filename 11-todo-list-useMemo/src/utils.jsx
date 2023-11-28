export function createTodos() {
  const todos = [];

  for (let i = 0; i < 100; i++) {
    todos.push({
      id: i,
      text: `Todo ${i + 1}`,
      isCompleted: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(todos, tab) {
  return todos.filter((todo) => {
    if (tab === "All") {
      return true;
    } else if (tab === "Active") {
      return !todo.isCompleted;
    } else if (tab === "Completed") {
      return todo.isCompleted;
    }
  });
}
