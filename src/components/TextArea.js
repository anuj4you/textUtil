import React, { useState } from "react";

export default function TextArea(props) {
  const changeHandler = (event) => {
    setText(event.target.value);
    
  };

  const upperHandler = () => {
    setText(text.toUpperCase());
  };

  const lowerHandler = () => {
    setText(text.toLocaleLowerCase());
  };

  const [text, setText] = useState("Paste or enter text here");

  return (
    <div>
      <div className="container my-3">
        <p className="h2">{props.heading}</p>
      </div>

      <div className="container my-3 text-center">
        <textarea
          value={text}
          onChange={changeHandler}
          className="form-control"
          id="textArea"
          style={{ height: "250px" }}
        ></textarea>

        <button
          onClick={upperHandler}
          className="btn btn-outline-primary my-3 mx-2"
        >
          Change to Upper Case
        </button>
        <button
          onClick={lowerHandler}
          className="btn btn-outline-secondary my-3 mx-2"
        >
          Change to Lower Case
        </button>
      </div>
    </div>

    
  );
}
