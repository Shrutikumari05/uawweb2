import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Form, Row, Col } from "react-bootstrap";

const Company_cards = ({ title, content, imageSrc }) => {
  const [ismodalopen, setismodalopen] = useState(false);
  const handleopenmodal = () => {
    setismodalopen(true);
  };

  const cards = [
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Product 1",
      content: "Description of Product",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "product 2",
      content: "Description of Product",
    },
    {
      img: "/static/media/img4.b6503030e1b0751165f5.jpg",
      title: "Product 3",
      content: "Description of Product",
    },

    // Add more cards as needed
  ];
  return (
    <div>
      <div className="w-3/4 m-auto">
        <div
          className="px-1 mt-20 d-flex gap-5"
          style={{ justifyContent: "center" }}
        >
          {cards.map((d) => (
            <div
              className=""
              style={{
                backgroundColor: "rgb(280,227,340)",
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
              <div
                className="flex flex-col justify-center items-center gap-4 p-4 
              product_details"
              >
                <h2 className="comp_card_h2">{d.title}</h2>
                <p className="comp_card_p2">{d.content}</p>
                <button
                  className=" btn-dark text-white btn-lg px-4 py-2 rounded-xl"
                  onClick={handleopenmodal}
                >
                  Contact sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="modal_div_cls ">
        <Modal
          show={ismodalopen}
          onHide={() => setismodalopen(false)}
          size="lg"
        >
          <div className="model_content" style={{ padding: "64px 40px" }}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  display: "flex",
                  position: "relative",
                  left: "6rem",
                }}
              >
                <h1 className="d-flex align-items-center justify-content-center">
                  Fill in the details{" "}
                </h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p
                className="modal_pcls"
                style={{
                  color: "grey",
                  fontSize: "20px",
                  textAlign: "center",
                  Bottom: "8px",
                }}
              >
                Our sales team will contact you shortly
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        autoFocus
                        style={{
                          borderRadius: "5px",
                          border: "none",
                          backgroundColor: "#d9dadb",
                          padding: "1.075rem 0.75rem",
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Contact No"
                        style={{
                          borderRadius: "5px",
                          border: "none",
                          backgroundColor: "#d9dadb",
                          padding: "1.075rem 0.75rem",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    placeholder="Adress"
                    as="textarea"
                    rows={3}
                    style={{
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#d9dadb",
                    }}
                  />
                </Form.Group>

                <Row>
                  <Col md={4}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Product Name"
                        autoFocus
                        style={{
                          borderRadius: "5px",
                          border: "none",
                          backgroundColor: "#d9dadb",
                          padding: "1.075rem 0.75rem",
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Quantity"
                        style={{
                          borderRadius: "5px",
                          border: "none",
                          backgroundColor: "#d9dadb",
                          padding: "1.075rem 0.75rem",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Your Company Name"
                    style={{
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#d9dadb",
                      padding: "1.075rem 0.75rem",
                    }}
                  />
                </Form.Group>

                {/* Additional field for Other Information */}

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
                  <Form.Control
                    type="text"
                    placeholder="Other Information"
                    style={{
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#d9dadb",
                      padding: "1.075rem 0.75rem",
                    }}
                  />
                </Form.Group>
                <Row>
                  <Col
                    md={12}
                    style={{
                      //   width: "20rem",
                      //   borderRadius: "4px",
                      position: "absolute",
                      left: "20rem",
                    }}
                  >
                    <Button className="bg-dark text-light" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Company_cards;
