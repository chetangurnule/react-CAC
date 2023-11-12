import { useReducer, useState } from "react";
import "./App.css";

function App() {
  let initialState = [
    {
      id: 1,
      title: "Todo 1",
      check: false,
    },
    {
      id: 2,
      title: "Todo 2",
      check: false,
    },
    {
      id: 3,
      title: "Todo 3",
      check: false,
    },
    {
      id: 4,
      title: "Todo 4",
      check: false,
    },
    {
      id: 5,
      title: "Todo 5",
      check: false,
    },
  ];
  function reducer(list, action) {
    console.log(list);
    if (action.type === "Change")
      return list.map((obj) => {
        if (obj.id === action.id) return { ...obj, check: !obj.check };
        else return obj;
      });
  }
  function handleChecker(item) {
    dispatch({ type: "Change", id: item.id });
  }
  const [list, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.check}
              onChange={() => {
                handleChecker(item);
              }}
            />
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
