// Card.js
import React from "react";
import img4 from "../assets/img4.jpg";
import "../companyComponent/companycards/companycards.css";

// import "react-responsive-carousel-v2/dist/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ThemeProvider } from "@mui/material/styles";

// Correct import for StyledEngineProvider
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

const renderArrowNext = (onClickHandler, label) => (
  <button
    type="button"
    onClick={onClickHandler}
    title={label}
    style={{
      color: "orange",
      position: "absolute",
      top: "56%",
      // right: "3%",
      right: "0%",
      border: "none",
    }}
  >
    <NavigateNextIcon />
  </button>
);

const renderArrowPrev = (onClickHandler, hasPrev, label) => (
  <button
    type="button"
    onClick={onClickHandler}
    title={label}
    style={{
      color: "orange",
      position: "absolute",
      top: "56%",
      // left: "15%",
      left: "0%",
      zIndex: 900,
      border: "none",
    }}
  >
    {/* Prev */}
    <NavigateBeforeIcon />
  </button>
);

const CommonCard = ({ title, content, imageSrc }) => {
  let navigate = useNavigate();
  const viewproduct = (value, e) => {
    console.log(value);
    if (value === "Company 1") {
      navigate("/product1");
    } else if (value === "Company 2") {
      navigate("/product2");
    } else if (value === "Company 3") {
      navigate("/product3");
    } else if (value === "Company 4") {
      navigate("/product4");
    } else if (value === "company 5") {
      navigate("/product5");
    }
  };
  const cards = [
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Company 1",
      content: "Content for card 1",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Company 2",
      content: "Content for card 2",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Company 3",
      content: "Content for card 3",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Company 4",
      content: "Content for card 2",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Company 5",
      content: "Content for card 3",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Company 6",
      content: "Content for card 2",
    },
   

    // Add more cards as needed
  ];
  return (
    <div className="trial" style={{ width: "100%" }}>
      <Carousel
        infiniteLoop={true}
        // autoPlay={true}
        arrows
        centerMode
        centerSlidePercentage={100}
        showIndicators={false}
        showArrows={true}
        renderArrowNext={renderArrowNext}
        renderArrowPrev={renderArrowPrev}
        autoFocus={true}
        showStatus={false}
        className="container carousel relative"
        interval={2000}
        style={{ width: "82rem" }}
      >
        {/* Slide 1 */}
        <div
          className=" row gx-0 align-items-center"
          // style={{ backgroundColor: "white" }}
        ></div>

        <div className=" row gx-0 align-items-center">
          <div className="w-3/4 m-auto">
            <div
              className="col-1 px-1 mt-20 d-flex gap-5"
              style={{ justifyContent: "center" }}
            >
              {cards.map((d) => (
                <div
                  className="col-4"
                  style={{
                    // backgroundColor: "rgb(280,237,345)",
                    borderRadius: "20px",
                    height: "450px",
                    width: "350px",
                  }}
                >
                  <div className="">
                    <img
                      src={d.img}
                      alt=""
                      style={{
                        width: "350px",
                        height: "300px",
                        // borderRadius: "20px",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                  </div>
                  <div className="justify-center items-center p-4 text-center product_details">
                    <h2>{d.title}</h2>

                    <button
                      className=" btn-dark text-white btn-lg px-4 py-2 rounded-xl"
                      onClick={(e) => viewproduct(d.title, e)}
                    >
                      View Products
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CommonCard;
