import React from 'react';
import logo from '../images/Welcome.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import readmePDF from '../images/readme.pdf'; // Import the PDF file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="auto" height="50" className="d-inline-block align-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <ul className="navbar-nav">
            {/* Add the download attribute with the PDF file path */}
            <li className="nav-item">
              <a className="nav-link" href={readmePDF} download="readme.pdf">Read ME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
