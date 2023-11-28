import { useMemo } from "react";
import { filterTodos } from "./utils";
import List from "./List";
import "./index.css";

export default function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab]);

  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      <List items={visibleTodos} />
    </div>
  );
}
