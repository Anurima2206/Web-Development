import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  const Addvalue = () =>{
  if(count<20){
  setCount(count+1);
  console.log("clicked"+count);
  }
  else{
    alert("max limit reached");
  }
  
  }
  const Removevalue = () =>{
    if(count>0){
    setCount(count-1);
    console.log("clicked"+count);
    }
    else{
      alert("min limit reached");
    }
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value:{count}</h2>
    <button onClick={Addvalue}>Add Value {count}</button>
    <br />
    <button onClick={Removevalue}>Remove Value {count}</button>
    <p>footer:{count}</p>
    </>
  )
}

export default App
