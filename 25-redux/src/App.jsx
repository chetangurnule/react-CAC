import { useState } from "react";
import "./App.css";
import Counter from "./feature/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to Counter Application</h1>
      <Counter />
    </>
  );
}

export default App;
