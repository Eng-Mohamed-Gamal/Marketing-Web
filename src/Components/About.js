import React from "react";

export default function About() {
  return (
    <div className="about" id="About">
      <h1 className="cen">
        <span>About</span> us
      </h1>
      <div className="container">
        <div className="img">
          <img src="./images/about-img.png" alt="" />
        </div>
        <div className="con">
          <h2>big projects start with big dream</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            distinctio incidunt repellendus quod consectetur! Voluptates magni
            ut doloremque modi laboriosam.
          </p>
          <button>learn more</button>
          <div className="all">
            <div className="go">
              <i class="fa-solid fa-award"></i>
              <p>15 Awards won</p>
            </div>
            <div className="go">
            <i class="fa-solid fa-user"></i>
              <p>290 satisfied clients</p>
            </div>
            <div className="go">
            <i class="fa-solid fa-diagram-project"></i>
              <p>500 project done !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
