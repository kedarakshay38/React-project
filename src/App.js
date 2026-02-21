import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    console.log("Toggle mode called");
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
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
      <TextForm heading="Enter the text to analyze below" mode={mode} />
      <About mode={mode} />
    </>
  );
}

export default App;
