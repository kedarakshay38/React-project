import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //  Alert Function
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  //  Toggle Theme
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  //Update body background properly
  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#5e5959" : "white";
  }, [mode]);

  return (
    <>
      {/* Navbar always visible */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* Alert always visible */}
      <Alert alert={alert} />

      {/* Page Content */}
      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />

          <Route path="/about" element={<About mode={mode} />} />

          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
