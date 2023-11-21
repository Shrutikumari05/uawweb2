import React from "react";
import img14 from "../../assets/img14.jpg";
import img18 from "../../assets/img18.jpg";
import img17 from "../../assets/img17.jpg";
import "./about.css";
import "../home/home.css";
import icon from "../../assets/icon.png";

function About() {
  return (
    <div className="mainDiv">
      <div className="header">
        <div className="heading1" data-aos="fade-up">
          <h1>Why UANDWE ?</h1>
        </div>

        <div className="textField" data-aos="fade-up">
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
                <p className="whyUscls">Why US</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img18} className="d-block w-100" alt="..." />
              <div className="textDiv">
                <p className="whyUscls">Our vision</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img17} className="d-block w-100" alt="..." />
              <div className="textDiv">
                <p className="whyUscls">Our mission</p>
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
        <div className="starDecoration1">
          <div className="line1 starline"></div>
          <div className="line2 starline"></div>
          <div className="line3 starline"></div>
          <div className="line4 starline"></div>
          <div className="line5 starline"></div>
          <div className="line6 starline"></div>
        </div>
        <div className="ovalDecoration1 "></div>
        <div className="ovalDecoration2 "></div>
      </div>

      <div className="middleDiv">
        <div className="content">
          <span className="midDivText" data-aos="fade-up">
            At UANDWE, we are a leading technological solutions company
            dedicated to empowering businesses and individuals with innovative
            solutions that drive growth, efficiency, and success. With our deep
            expertise in cutting-edge technologies and a passion for delivering
            exceptional results, we help our clients harness the power of
            technology to transform their operations and achieve their goals
          </span>
        </div>

        <div className="heading2">
          <h1 className="" data-aos="fade-up">
            What We Do
          </h1>
        </div>
      </div>

      <div className="lastDiv">
        <div className="ovalDecoration3 "></div>
        <div className="ovalDecoration4 "></div>

        <div className="heading2">
          <h1 data-aos="fade-up">Our Team</h1>
        </div>

        <div className="divData" data-aos="slide-up">
          <div className="data1">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <div className="imgData">
              <div className="">
                <h2>Name</h2>
              </div>

              <h3>Designation</h3>
            </div>
          </div>

          <div className="data1">
            <div className="icon">
              <img className="abImgIcon" src={icon} alt="" />
            </div>
            <div className="imgData">
              <div className="">
                <h2>Name</h2>
              </div>

              <h3>Designation</h3>
            </div>
          </div>

          <div className="data1">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <div className="imgData">
              <div className="">
                <h2>Name</h2>
              </div>

              <h3>Designation</h3>
            </div>
          </div>

          <div className="data">
            <div className="icon">
              <img className="abImgIcon" src={icon} alt="" />
            </div>
            <div className="imgData">
              <h2>Name</h2>
              <h3 className="designaation">Designation</h3>
            </div>
          </div>

          <div className="data">
            <div className="icon"></div>
            <div className="imgData">
              <div className="">
                <h2>Name</h2>
              </div>

              <h3 className="designaation">Designation</h3>
            </div>
          </div>

          <div className="data">
            <div className="icon">
              <img className="abImgIcon" src={icon} alt="" />
            </div>
            <div className="imgData">
              <div className="">
                <h2>Name</h2>
              </div>

              <h3 className="designaation">Designation</h3>
            </div>
          </div>
        </div>
        <div className=" startDivDec">
          <div className="line1 starline"></div>
          <div className="line2 starline"></div>
          <div className="line3 starline"></div>
          <div className="line4 starline"></div>
          <div className="line5 starline"></div>
          <div className="line6 starline"></div>
        </div>
      </div>
    </div>
  );
}

export default About;

