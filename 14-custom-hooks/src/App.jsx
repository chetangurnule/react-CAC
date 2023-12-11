import { useEffect, useState } from "react";
import "./App.css";

function useLocalStorage(key, defaultValue) {
  const [count, setCount] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, count);
  }, [count]);

  return [count, setCount];
}
function App() {
  const [count, setCount] = useLocalStorage("my-app-count", 0);
  return (
    <>
      <div>
        count : {count}
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      </div>
    </>
  );
}

export default App;
