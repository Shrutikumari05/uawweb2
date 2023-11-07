// import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import img15 from "../../assets/img15.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img4 from "../../assets/img4.jpg";
import unused1 from "../../assets/unused1.webp";
import unused2 from "../../assets/unused2.webp";
import "./home.css";

function Home() {
  return (
    // <div>
    <div className="container-fluid home" style={{ marginRight: "11rem" }}>
      <div className="container-fluid hero d-flex ">
        <div
          className="homeContent mt-5"
          style={{ transform: "perspective(1200px)" }}
        >
          <div className="parentclstext" data-aos="fade-up">
            <div className="main_heading">
              <div>
                <span className="d-block">Engineering</span>
              </div>
              <div>
                <span className="">Re-defined</span>
              </div>
            </div>

            <h6 className="homeSubSec ">Seasoned Technopreneurs, Pioneering</h6>
            <h6 className="homeSubSec ">Software Solutions</h6>
            <div className="learnmorecls">
              <Button>Learn More</Button>{" "}
            </div>
          </div>
        </div>
        <div className="image-grid imgSection mt-4">
          <div className="img1">
            <img
              src={unused2}
              class="heroImg"
              alt=""
              style={{ width: "300px", height: "625px" }}
            />
          </div>
          <div className="img2">
            <img
              src={unused1}
              class="heroImg"
              alt=""
              style={{ width: "304px", height: "304px" }}
            />
          </div>
        </div>
      </div>

      {/* ____________MiddleSection___________ */}

      <div
        className="container-fluid"
        style={{ backgroundColor: " rgb(219, 219, 219)" }}
      >
        <div className="row gx-0 middleSection">
          {/* <div className="col-12 d-flex"> */}
          <h1
            className=" heading  d-flex justify-content-center"
            style={{ fontSize: "100" }}
          >
            Our Services
          </h1>

          <div className="row gx-0 midDiv" data-aos="fade-right" style={{}}>
            <div className="midImg col-6">
              <img src={img15} className="service_img" alt="" />
            </div>
            <div className="col-6 semiconductortextcls">
              <h4 className="subHeading">Semiconductor</h4>
              <h6>
                Our top-notch, tailor-made softwareproducts simplify
                collaboration onintricate tasks, enhancing efficiency
                andingenuity.
              </h6>
            </div>
            <div className="ovalDecoration"></div>
            {/* </div> */}
          </div>

          <div className="row gx-0 midDiv" data-aos="fade-left">
            <div className="col-6 telccomtextxcls  justify-content-center">
              <h4 className="subHeading">Telecom</h4>
              <h6>
                Our top-notch, tailor-made softwareproducts simplify
                collaboration onintricate tasks, enhancing efficiency
                andingenuity.
              </h6>
            </div>
            <div className="col-6 midImg tele">
              <img src={img13} class="service_img" alt="" />
            </div>
            <div className="starDecoration">
              <div className="line1 starline"></div>
              <div className="line2 starline"></div>
              <div className="line3 starline"></div>
              <div className="line4 starline"></div>
              <div className="line5 starline"></div>
              <div className="line6 starline"></div>
            </div>
          </div>

          <div className="row gx-0 midDiv" data-aos="fade-right">
            <div className="col-6 midImg ">
              <img src={img14} class="service_img" alt="" />
            </div>
            <div className="col-6 automotivetextcls">
              <h4 className="subHeading">Automotive</h4>
              <h6>
                Our top-notch, tailor-made softwareproducts simplify
                collaboration onintricate tasks, enhancing efficiency
                andingenuity.
              </h6>
            </div>
            <div className="ovalDecoration"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row align-item-center d-flex mt-3 testimonials">
          <h1 className="heading lastDiv d-flex  mt-3 justify-content-center">
            Our Partners
          </h1>
          <div className="parent_card d-flex" data-aos="fade-up">
            <div className="col-4 myCard rounded px-5 mt-5">
              <div class="card_main ">
                <img src={img4} class="card-img-top rounded" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 myCard  px-5 mt-5">
              <div class="card_main">
                <img src={img4} class="card-img-top rounded" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 myCard px-5 mt-5">
              <div class="card_main">
                <img src={img4} class="card-img-top rounded" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
