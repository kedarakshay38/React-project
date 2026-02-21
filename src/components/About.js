import React, { useState } from "react";
export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const myStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "white",
    color: darkMode ? "white" : "#1e1e1e",
    border: "1px solid",
    borderColor: darkMode ? "white" : "#1e1e1e",
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container">
      <button
        className={`btn ${darkMode ? "btn-light" : "btn-dark"} my-3 px-4`}
        onClick={toggleMode}
      >
        {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
      </button>

      <div className="accordion" id="accordionAbout">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAbout">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAbout"
              aria-expanded="true"
              aria-controls="collapseAbout"
            >
              {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
            </button>
          </h2>
          <div
            id="collapseAbout"
            className="accordion-collapse collapse show"
            aria-labelledby="headingAbout"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>About This Website</strong>
              <p>
                This is a React-based website created for learning and hands-on
                practice. It helps in understanding core React concepts like
                components, state, props, event handling, and UI styling using
                Bootstrap.
              </p>
              <p>
                The main goal of this project is to strengthen practical
                knowledge by building features and experimenting with real
                examples.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
