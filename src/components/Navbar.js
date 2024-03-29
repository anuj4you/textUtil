import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-$dark bg-$dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title || "Title"}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.item || "list"}
                </a>
              </li>
            </ul>

             
            <div className="form-check form-switch"> 
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label text-$light" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
