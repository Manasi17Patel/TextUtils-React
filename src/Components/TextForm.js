import React, { useState } from "react";
// import Copy from "copy-to-TextForm";
export default function TextForm(props) {
  
  const [text, setText] = useState("enter the text");
  // Uppercase
  const handleupclick = () => {
    // console.log("Click to Uppercase" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to Uppercase","success")
  };

  // lowercase
  const handlelwclick = () => {
    // console.log("Click to Lowercase" + text)
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to Lowercase","success")
  };

  // Copy the text
  const handlecopyclick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copy the text","success")
  };

  // onclick function
  const clickchange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='light'? 'dark':'light'}}>
        <h1 style={{color:props.mode==='light'? 'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={clickchange}
            id="mybox"
            rows="8" 
            style={{backgroundColor:props.mode==='light'? 'white':'#b5b4a6', color:props.mode==='light'? 'black':'white'}}
          ></textarea>
        </div>
        <button className={`btn btn-primary mx-2`}  style={{backgroundColor:props.mode==='light'? 'primary':'#b5b4a6',border:'1px solid white'}} onClick={handleupclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2"  style={{backgroundColor:props.mode==='light'? 'primary':'#b5b4a6',border:'1px solid white'}} onClick={handlelwclick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode==='light'? 'primary':'#b5b4a6',border:'1px solid white'}} onClick={handlecopyclick}>
          Copy the text
        </button>
      </div>
      <div className="container mb-4" style={{color:props.mode==='light'? 'black':'white'}}>
        <h1>Summary of the text</h1>
        <p>
          {text.split(" ").length} World and {text.length} Charector
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>

        <p>{text.split(".").length} Paregraph</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:'enter the text for a previwe'}</p>
      </div>
    </>
  );
}
  