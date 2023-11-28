import { memo } from "react";

const List = memo(function List({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.isCompleted ? <s>{item.text}</s> : item.text}
          </li>
        );
      })}
    </ul>
  );
});

export default List;
