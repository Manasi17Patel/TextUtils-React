import React, { useState}  from "react";
export default function About() {

//All color style
const[mystle,setMystle]=useState(
  {
    color: "white",
    backgroundColor: "black"
  }

)

// Button color style
const[mystlebutton,setMystleButton]=useState(
  {
    color: "white",
    backgroundColor: "blue"
  }
)

// button text change
const[btntext,setbtneTxt]=useState("Dark Mode")


function changethemode(){

  //All color style
  if(mystle.color==='white' && mystle.backgroundColor==='black' ){
    setMystle({
      color: "black",
      backgroundColor: "white"
    })
    setbtneTxt("Dark Mode")
  }
  else{
    setMystle({
      color: "white",
      backgroundColor: "black"
    })
    setbtneTxt("Light Mode")
  }

  // Button color style
  if(mystlebutton.color==='white' && mystlebutton.backgroundColor==='blue' ){
    setMystleButton({
      color: "blue",
      backgroundColor: "white"
    })
  }
  else{
     setMystleButton({
      color: "white",
      backgroundColor: "blue"
    })
  }
}
  
  return (
    <div className="container" style={mystle}>
      <h1 className="mx-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystle}>
        <div className="accordion-item" style={mystle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              fdprocessedid="4z0ned"
              style={mystle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              fdprocessedid="bfgwyc"
              style={mystle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              fdprocessedid="29iaei"
              style={mystle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button  style={mystlebutton} onClick={changethemode} type="button" class="btn btn-info my-3">{btntext}</button>
    </div>
  );
}
