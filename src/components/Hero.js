import React from "react";

function Hero() {
  return (
    <div>
      <section className="hero">
        <img
          src={require("../images/Headshot.jpg")}
          alt="headshot of Jacob"
          className="headshot"
        />
      </section>
    </div>
  );
}

export default Hero;
