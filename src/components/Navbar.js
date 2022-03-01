import React from "react";

function Navbar() {
  return (
    <div className="header header-footer">
      <h1>
        <a href="./index.html" className="name">
          Jacob Machlis
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">ABOUT ME</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#links">LINKS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
