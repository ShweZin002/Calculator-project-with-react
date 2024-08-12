import React from 'react'
import "./Button.css";
const Button = ({clickDataHandling}) => {

  return (
    <div className='btn-container'>
      <div className="button-group">
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>C</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>(</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>)</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>x</button>
      </div>
      <div className="button-group">
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>7</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>8</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>9</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>+</button>
      </div>
      <div className="button-group">
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>4</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>5</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>6</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>-</button>
      </div>
      <div className="button-group">
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>1</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>2</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>3</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>*</button>
      </div>
      <div className="button-group">
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>.</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>0</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>00</button>
        <button onClick={(e)=>clickDataHandling(e.target.innerText)}>/</button>
      </div>
      <div className='equal_side'>
        <button className='cal_name'><p>CODE LAB</p></button>
        <button className='equal' onClick={(e)=>clickDataHandling(e.target.innerText)}>=</button>
      </div>
    </div>
  )
}

export default Button
