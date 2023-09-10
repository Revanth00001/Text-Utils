import React, { useState } from "react";

export default function TextBar(props) {
  // for action to be taken on button //
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();

    msg.text = text;

    window.speechSynthesis.speak(msg);
  };
  const handleclsClick = () => {
    let m = "";
    setText(m);
  };

  const handelOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  function capitalized() {
    var arr = text.split(" ");

    var c = arr.length;

    var temp = "";

    while (c !== 0) {
      temp =
        arr[c - 1].charAt(0).toUpperCase() +
        arr[c - 1].substring(1).toLowerCase() +
        " " +
        temp;

      c--;
    }

    setText(temp);
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.title} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          CONVERT TO UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleloClick}
        >
          CONVERT TO LOWERCASE
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleclsClick}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={capitalized}
        >
          Capital
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>

        <p>
          {text.length} letters and {text.split(" ").length} words in this
          letter
        </p>

        <p>{0.008 * text.split("").length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
