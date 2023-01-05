import React from "react";

export default function TextArea(props) {
  return (
    <div>
      <div className="container my-3">
        <p class="h2">{props.heading}</p>
      </div>

      <div className="container my-3 text-center">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "250px" }}
          ></textarea>
        </div>
        <button type="button" class="btn btn-outline-primary my-3 mx-2">
          Change to Upper Case
        </button>
        <button type="button" class="btn btn-outline-primary my-3 mx-2">
          Change to Lower Case
        </button>
      </div>
    </div>
  );
}
