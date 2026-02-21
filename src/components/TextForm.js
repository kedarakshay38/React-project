import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //use of steate always use 'setText' to update value of text

  const reversrText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#1e1e1e" }}
    >
      <h1>{props.heading}</h1>
      <div className=" mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          className="btn btn-primary mb-2 mx-2 mt-2"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mb-2 mx-2 mt-2"
          onClick={reversrText}
        >
          Reverse Text
        </button>
      </div>
      <div className="mx-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words in your text </p>
        <p>{text.length} characters in your text</p>
        <p>{text.split(" ").length * 0.008} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
