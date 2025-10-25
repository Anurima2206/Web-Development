import { useState } from "react"


function App() {
  const [color, setColor] = useState("violet")

  return (
    <div className="w-full h-full" style={{backgroundColor: color}}>
      <div className="fixed flex justify-center bottom-12 mx-140">
        <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          
          className="px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("black")}
          className="px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button
          onClick={() => setColor("purple")}
          className="px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
          onClick={() => setColor("orange")}
          className="px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App