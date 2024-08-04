//cd react_tutorial
import { useState } from "react";
import "./App.css";

// import About from './Components/About.js';
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };
  
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  // function 1
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Lightmode"

      // setInterval(() => {
      //   document.title = "TextUtils so good"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "install TextUtils and cedit $1000 "
      // }, 100);
    }
     else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(7 5 54)";
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Darkmode"
    }

  };

  const greenbccolor = () =>{
    if (mode === "light" || mode === "dark") {
      setMode("success");
      document.body.style.backgroundColor = "rgb(123 179 108 / 92%)";
      showAlert("green mode has been enabled","success")
      document.title = "TextUtils - Greenmode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Lightmode"
    }
    
  }
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        AboutText="AboutTextUtils"
        toggleMode={toggleMode}
        mode={mode}
        greenbccolor={greenbccolor}/>

      <div className="container my-3">
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* /users/ -->component-1 
              /users/home -->component-2 that is use to exact  */}
          {/* <Route exact path="/about.js" element={<About/>}/> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text Analyze" greenbccolor={greenbccolor} showAlert={showAlert} mode={mode} />}/>   */}
        {/* </Routes> */}
        <TextForm heading="Enter the text Analyze" greenbccolor={greenbccolor} showAlert={showAlert} mode={mode} />

        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}


export default App;
