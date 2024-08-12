import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Input from "./component/Input";
import Output from "./component/Output";

function App() {
  const [input,setInput]=useState(0);
  const [output,setOutput]=useState(0);
  const clickData=(value)=>{
    if(value == "C"){
      setInput(0);
      setOutput(0);
    }
    else if(value == "x"){
      if(input != 0){
        input.length == 1 ?setInput(0):setInput(input.slice(0,input.length - 1))
      }
    }else if(value== "="){
      setInput(0);
      setOutput(eval(input));
    }
    else{
      input == 0 ?setInput(value):setInput(input+value);
    }
  }
  return (
    <div className="container">
      <div >
      <Output output={output}/>
      <Input input={input}/>
      <Button clickDataHandling={clickData}/>
      </div>
    </div>
  );
}

export default App;
