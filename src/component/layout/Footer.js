import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div
          className="container-fluid footerDiv h-100"
          // style={{ backgroundColor: "black" }}
        >
          <div className="row">
            <div className="col-xl-3 offset-xl-1 col-lg-2 col-md-6 mt-3">
              <div className="">
                <h5>Useful Link</h5>
                <ul className="list-unstyled">
                  <li className="navItem">
                    <a href="#" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="navItem">
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "white" }}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="navItem">
                    <a href="#" className="text-decoration-none">
                      Partners
                    </a>
                  </li>
                  <li className="navItem">
                    <a href="#" className="text-decoration-none">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mt-3">
              <div>
                <h5>Services</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none">
                      Semiconductor
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Telecom
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Automotive
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mt-3">
              <div>
                <h5>Stay in touch</h5>
                <ul className="list-unstyled mt-3">
                  <li>
                    <div className="mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                      <button type="button" class="btn btn-secondary">
                        Submit
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-left">
            <div className="copyright mt-3">
              <h6>© UANDWE 2023</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
