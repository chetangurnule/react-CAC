import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incerement</button>
    </>
  );
}

export default App;
