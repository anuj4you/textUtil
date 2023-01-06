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

  let count = text.length;
  let wordCount = text.split(" ").length;
  let readingTime = Math.ceil(wordCount*0.016);

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
          style={{ height: "300px" }}
        ></textarea>

        <button
          onClick={upperHandler}
          className="btn btn btn-primary my-3 mx-2"
        >
          Change to Upper Case
        </button>
        <button
          onClick={lowerHandler}
          className="btn btn btn-primary my-3 mx-2"
        >
          Change to Lower Case
        </button>
      </div>
      <div className="container my-2">
      <h4>Text Summary</h4>
        <p><b>{count}</b> characters and <b>{wordCount}</b> words with reading time of <b>{readingTime}</b> minutes </p>
      </div>
    </div>

    
  );
}
