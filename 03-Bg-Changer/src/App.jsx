import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen flex justify-center" style = {{backgroundColor : color}}>
        <div className=" fixed top-10 flex justify-centerj px-4 py-2 bg-white gap-10 shadow-lg rounded-lg">
          <button className=' bg-red-500 px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("red")}>Red</button>
          <button className=' bg-green-500 px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("green")}>Green</button>
          <button className=' bg-pink-500 px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("pink")}>Pink</button>
          <button className=' bg-orange-500 px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("orange")}>Orange</button>
          <button className=' bg-black px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("black")}>Black</button>
          <button className=' bg-violet-500 px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("violet")}>Violet</button>
          <button className=' bg-blue-500 px-5 py-1 rounded-md text-white shadow-md' onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
