import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [counter,setCounter]=useState(5)
  useEffect(()=>{
    if(counter >0){
      const interval=setInterval(()=>{
        setCounter(counter-1)
      },1000)
      return ()=>{
        clearInterval(interval)
      }
    }
  },[counter])
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default App;
