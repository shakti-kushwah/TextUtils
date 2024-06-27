import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert("null");
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils: Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils: Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils" /> */}

      {/* For defaultProps */}
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" /> */}



      {/* <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} removeBodyClasses={removeBodyClasses}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
      </div>\
      <About/> */}



      {/********      React-Router-Dom      ********/}
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} removeBodyClasses={removeBodyClasses}/>
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element={<About />}
            />

            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
