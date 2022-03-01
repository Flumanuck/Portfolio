import React from "react";

function Work() {
  return (
    <article className="projects">
      <aside id="work" className="section-title">
        WORK
      </aside>
      <div className="flexbox">
        <section>
          <div className="project-links image biggest">
            <a href="https://gthov2.herokuapp.com/">
              <img
                className="run-buddy"
                alt="gtho screenshot"
                src={require("../images/Gtho2.0 screenshot.png")}
              />
            </a>
          </div>
        </section>
      </div>
      <div className="flexbox">
        <section className="sub-box">
          <div className="image project-links">
            <a href="https://flumanuck.github.io/Horiseon/">
              <img
                className="smaller-links"
                alt="horiseon screenshot"
                src={require("../images/Horiseon-screenshot.png")}
              />
            </a>
          </div>
          <div className="image project-links">
            <a href="https://flumanuck.github.io/password-generator/">
              <img
                className="smaller-links"
                alt="Password Generator Screenshot"
                src={require("../images/Password-screenshot.PNG")}
              />
            </a>
          </div>
          <div className="image project-links">
            <a href="https://flumanuck.github.io/coding-quiz/">
              <img
                className="smaller-links"
                alt="coding quiz screenshot"
                src={require("../images/Screenshot.PNG")}
              />
            </a>
          </div>
          <div className="image project-links">
            <a href="https://detemination-0513.herokuapp.com/">
              <img
                className="smaller-links"
                alt="determined screenshot"
                src={require("../images/Determined.png")}
              />
            </a>
          </div>
          <div className="image project-links">
            <a href="https://notet.herokuapp.com/">
              <img
                className="smaller-links"
                alt="Note Taker Screenshot"
                src={require("../images/Screenshot-main.PNG")}
              />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Work;
