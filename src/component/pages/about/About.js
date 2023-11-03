import React from "react";
import img14 from "../../assets/img14.jpg";
import img18 from "../../assets/img18.jpg";
import img17 from "../../assets/img17.jpg";
import "./about.css";

function About() {
  return (
    <div className="mainDiv">
      <div className="header">
        <div className="heading1">
          <h1>Why UANDWE ?</h1>
        </div>

        <div className="textField">
          <h2>
            {" "}
            Watch a quick slide-show to understand our mission and vision
          </h2>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img14} class="d-block w-100" alt="" />
              <div className="textDiv">
                <p>Why US</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img18} className="d-block w-100" alt="..." />
              <div className="textDiv">
                <p>Our vision</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img17} className="d-block w-100" alt="..." />
              <div className="textDiv">
                <p>Our mission</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ovalDecoration"></div>
      </div>

      <div classNameName="MiddleDiv"></div>

      <div classNameName="lastDiv"></div>
    </div>
  );
}

export default About;
