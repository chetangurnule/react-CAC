import { useReducer } from "react";
import "./App.css";

function App() {
  function reducer(state, action) {
    if (action.type === "change") return { name: action.name, age: state.age };
    if (action.type === "Inc") return { name: state.name, age: state.age + 1 };
    if (action.type === "Dec") return { name: state.name, age: state.age - 1 };
  }
  let obj = {
    name: "chetan",
    age: 23,
  };
  const [state, dispatch] = useReducer(reducer, obj);

  return (
    <>
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "change", name: e.target.value });
          }}
        />{" "}
        <br />
        <button
          onClick={() => {
            dispatch({ type: "Inc" });
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Dec" });
          }}
        >
          Dec
        </button>
        <div className="text">
          My name is {state.name} and my age is {state.age}
        </div>
      </div>
    </>
  );
}

export default App;
