import React,{ useRef } from 'react'

const FormHandlingUseRef = () => {
    const language_arr = ["php", "html", "js"];
    const name = useRef();
    const email = useRef();
    const language = useRef();
    const onSubmit = () => {
      const data = {
        name: name.current.value,
        email: email.current.value,
        language: language.current.value,
      };
      name.current.value = "";
      email.current.value = "";
      language.current.value = "";
      console.log(data);
    };
    const ChangeToRed = () => {
      name.current.style.border = "1px solid red";
      email.current.style.boder = "1px solid red";
      language.current.style.boder = "1px solid red";
      name.current.focus();
      email.current.focus();
      language.current.focus();
    };
    const ChangeToBlue = () => {
      name.current.style.border = "1px solid blue";
      email.current.style.boder = "1px solid blue";
      language.current.style.boder = "1px solid blue";
      name.current.focus();
      email.current.focus();
      language.current.focus();
    };
  
  return (
    <div>
      <div className="container">
        <form action="">
          <div className="">
            <input type="text" ref={name} />
          </div>
          <div className="">
            <input type="text" ref={email} />
          </div>
          <div className="">
            <select name="" id="" ref={language}>
              {language_arr.map((item,index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="d-inline">
            <button type="button" onClick={()=>onSubmit()}>
              Save
            </button>
          </div>
          <div className="d-inline">
            <button type="button" onClick={()=>ChangeToRed()}>
              Red
            </button>
          </div>
          <div className="d-inline">
            <button type="button" onClick={()=>ChangeToBlue()}>
              Blue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormHandlingUseRef
