import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { startTransition } from "react";
import LOGO from "../../component/assets/LOGO.webp";

import "./navbar.css";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItem, setselectedItem] = useState("home");

  const currentURL = window.location.href;
  let currentURL1 = currentURL.split("/")[currentURL.split("/").length - 1];

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handleItemClick = (item) => {
    setselectedItem(item);
  };
  useEffect(() => {
    if (currentURL1 === "") {
      currentURL1 = "home";
    }
    setselectedItem(currentURL1);
    /*useEffect(() => {
    if (currentURL1 === "") {
      currentURL1 = "home";
    }*/
    // Wrap the state update with startTransition to prevent concurrent mode errors
    // startTransition(() => {
    //   setselectedItem(currentURL1);
    // });
  }, [selectedItem]);

  const menuStyle = {
    color: "black",
    borderBottom: "2px solid black",
  };
  return (
    <>
      <div style={{ marginRight: "11rem" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
          <div className="container">
            <img src={LOGO} class="service_img" alt="" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle  navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
              <ul
                className="navbar-nav ms-auto navbarDiv"
                style={{ gap: "20px" }}
              >
                <li
                  className={`nav-item ${
                    selectedItem === "Home" ? "isActive" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link "
                    aria-current="pages"
                    to="/"
                    onClick={() => handleItemClick("Home")}
                    style={selectedItem === "Home" ? menuStyle : {}}
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    selectedItem === "about" ? "isActive" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link"
                    aria-current="pages"
                    to="/about"
                    onClick={() => handleItemClick("about")}
                    style={selectedItem === "about" ? menuStyle : {}}
                  >
                    About
                  </NavLink>
                </li>
                <li class="navitem dropdown">
                  <a
                    class="nav-link dropdown-toggle /////active"
                    href="services"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Semiconductor
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Telecom
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Automotive
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  // className="navitem"
                  className={`nav-item ${
                    selectedItem === "Partners" ? "isActive" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link"
                    to="/Partners"
                    onClick={() => handleItemClick("Partners")}
                    style={selectedItem === "Partners" ? menuStyle : {}}
                  >
                    Partners
                  </NavLink>
                </li>

                <li
                  className={`nav-item ${
                    selectedItem === "Careers" ? "isActive" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link"
                    to="/Careers"
                    onClick={() => handleItemClick("careers")}
                    style={selectedItem === "Careers" ? menuStyle : {}}
                  >
                    Careers
                  </NavLink>
                </li>

                <li
                  className={`nav-item ${
                    selectedItem === "Contact" ? "isActive" : ""
                  } `}
                >
                  <NavLink
                    className="nav-link"
                    to="/Contact"
                    onClick={() => handleItemClick("Contact")}
                    style={selectedItem === "Contact" ? menuStyle : {}}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true"></i>{" "}
                    Contact
                  </NavLink>
                </li>
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ position: "relative", left: "10%" }}
                >
                  Log in
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
