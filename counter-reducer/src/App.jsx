import { useReducer } from "react";
import "./App.css";

function App() {
  function reducer(state, action) {
    console.log(state, action);
    if (action.type == "Increment") state = state + 1;
    if (action.type == "Decrement") state = state - 1;
    return state;
  }
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>
        <h1>count : {state}</h1>
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        >
          Dec
        </button>
      </div>
    </>
  );
}

export default App;
