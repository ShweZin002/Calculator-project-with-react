import React, { useState } from 'react'
import "./Button.css";
const FormHandlingUseStage = () => {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [language,setlanguage]=useState('');
    const [active,setactive]=useState(false);
    const [ractive,setractive]=useState(false);
    const language_arr = ["php", "html", "js"];
    const onSubmit = () => {
        const data = {
          name: name,
          email: email,
          language: language,
          active: active,
          ractive: ractive,
        };
          
        console.log(data);
      };
    //   const ChangeToRed = () => {
    //     name.current.style.border = "1px solid red";
    //     email.current.style.boder = "1px solid red";
    //     language.current.style.boder = "1px solid red";
    //     name.current.focus();
    //     email.current.focus();
    //     language.current.focus();
    //   };
    //   const ChangeToBlue = () => {
    //     name.current.style.border = "1px solid blue";
    //     email.current.style.boder = "1px solid blue";
    //     language.current.style.boder = "1px solid blue";
    //     name.current.focus();
    //     email.current.focus();
    //     language.current.focus();
    //   };
  return (
    <div>
      <div className="container">
        <form action="">
          <div className="">
            <input type="text"  onChange={(e)=>setname(e.target.value)}/>
          </div>
          <div className="">
            <input type="text"  onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div className="">
            <select name="" id=""  onChange={(e)=>setlanguage(e.target.value)}>
              {language_arr.map((item,index) => (
                <option key={index} value={item} >{item}</option>
              ))}
            </select>
          </div>
          <div className="">
            <input type="checkbox"  onChange={(e)=>setactive(!active)}/>
          </div>
          <div className="">
            <input type="radio"  onChange={(e)=>setractive(!ractive)}/>
          </div>
          <div className="">
          <div className="d-inline">
            <button type="button" onClick={()=>onSubmit()}>
              Save
            </button>
          </div>
          <div className="d-inline">
            <button type="button" >
              Red
            </button>
          </div>
          <div className="d-inline">
            <button type="button" >
              Blue
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormHandlingUseStage
