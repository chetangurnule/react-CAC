import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let incrementFunc = () => {
    setCount(count+1);
  }
  let decrementFunc = () => {
    setCount(count-1);
  }
  return (
    <>
     <h1>Basic Counter Project</h1>
     <p>count : {count}</p>
     <p>count : {count}</p>
     <p>count : {count}</p>
     <p>count : {count}</p>
     <p>count : {count}</p>
     <button onClick={incrementFunc}>Increment</button> <br/> <br/>
     <button onClick={decrementFunc}>Decrement</button>
    </>
  )
}

export default App
