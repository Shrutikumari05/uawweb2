import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import img14 from "../../assets/img14.jpg";
import img18 from "../../assets/img18.jpg";
import img17 from "../../assets/img17.jpg";
// import img4 from "../../assets/img4.jpg";
import img1 from "../../assets/img1.jpg";
import "./partners.css";
import CommonCard from "../../cardcomponent/CommonCard";


function Partners() {
  return (
    <div className="pmaindiv container-fluid">
      <div className="pfirst" data-aos="fade-up">
        <div className="psubSec">
          <div className="par_heading">
            <span>Our</span>
            <br></br>
            <span>Partners</span>
          </div>
          <div className="par_img">
            <div className="pImgsec">
              <img className="pImgdiv" src={img1} alt="" />
            </div>
          </div>
          <div className="par_content">
            <p className="pText">
              At UANDWE, we believe in the power of collaboration and strategic
              partnerships. We have forged strong alliances with
              industry-leading organizations to expand our capabilities and
              deliver comprehensive technological solutions to our clients. Our
              partners play a vital role in helping us stay at the forefront of
              innovation and provide
            </p>
          </div>
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

      <div className="psecond" >
        <div
          id="carouselExampleControls"
          className="carousel slide secondDivImg"
          data-bs-ride="carousel "
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img14} class="d-block w-100" alt="" />
              <div className="p_subCard">
                <div className="p_subcard_content">
                  <div className="p_company">
                    <h1>Company1</h1>
                  </div>
                  <div className="">
                    <h2>
                      "UANDWE's expertise and dedication to excellence have been
                      instrumental in transforming our business."
                      <br></br>
                      -person
                    </h2>
                  </div>
                  <div className="">
                    <div className="learnmorecls">
                      <Button>Learn More</Button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={img18} className="d-block w-100" alt="..." />
              <div className="p_subCard">
                <div className="p_subcard_content">
                  <div className="p_company">
                    <h1>Company2</h1>
                  </div>
                  <div className="">
                    <h2>
                      "UANDWE's expertise and dedication to excellence have been
                      instrumental in transforming our business."
                      <br></br>
                      -person
                    </h2>
                  </div>
                  <div className="">
                    <div className="learnmorecls">
                      <Button>Learn More</Button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={img17} className="d-block w-100" alt="..." />
              <div className="p_subCard_company3">
                <div className="p_subcard_content_compnay3">
                  <div className="p_company">
                    <h1>Company3</h1>
                  </div>
                  <div className="">
                    <h2>
                      "UANDWE's expertise and dedication to excellence have been
                      instrumental in transforming our business."
                      <br></br>
                      -person
                    </h2>
                  </div>
                  <div className="">
                    <div className="learnmorecls">
                      <Button className="p">Learn More</Button>{" "}
                    </div>
                  </div>
                </div>
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
      </div>
      {/* <div>
        <CommonButton keysss={"one"} />
      </div> */}

      <div className="p_Last" data-aos="fade-up">
        
        <CommonCard/>
        
      </div>
     

    </div>
  );
}

export default Partners;
