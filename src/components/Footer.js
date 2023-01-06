import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="footer fixed-bottom z-index:-9999">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                AboutUs
              </a>
            </li>
          </ul>
          <p className="text-center text-muted ">
            © {new Date().getFullYear()} TextUtil, Anuj Kumar Inc
          </p>
        </footer>
      </div>
    </div>
  );
}
