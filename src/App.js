import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    console.log("Toggle mode called");
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
    document.body.style.backgroundColor =
      mode === "light" ? "#5e5959" : "white";
  };

  return (
    <>
      <Navbar
        title="Text"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} mode={mode} />
      <TextForm
        heading="Enter the text to analyze below"
        showAlert={showAlert}
        mode={mode}
      />
      <About mode={mode} />
    </>
  );
}

export default App;
