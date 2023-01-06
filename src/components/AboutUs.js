import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar title="TextUtils" item="AboutUs" />

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">About Us </h1>
            <hr />
            <h4>How it works?</h4>
            <p className="lead text-muted">
              Dealing with texts is a common day-to-day activity. Here you can
              find all the text utilities to help you in performing your
              activity much faster. This includes tools to remove duplicates,
              specific strings accents from a text, sort lines, remove line
              breaks, and many others.
            </p>
          </div>
        </div>
      </section>

      <div className="container d-flex justify-content-around">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Case Converter</h5>
            <h6>Upper case ↹ Lower case</h6>
            <p className="card-text">
              This tool can be used to quickly convert your text between
              different cases.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Word Counter</h5>
            <h6>? words</h6>
            <p className="card-text">
              This tool can be used to count number of words on text. Help keep
              that paragraph under word limit.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">letter counter </h5>
            <h6>⌛ Reading time </h6>
            <p className="card-text">
              This tool can be used to anticipate time taken to read the text.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
