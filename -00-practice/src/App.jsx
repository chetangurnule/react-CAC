import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect code
    const timer = setInterval(() => {
      console.log("Timer fired");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts or when 'count' changes
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
