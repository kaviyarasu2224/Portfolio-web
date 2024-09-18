import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e1223a6-32fe-4f47-97fe-82feccd9aec3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Let's connect</h1>
      </div>
      <Container>
        <Row>
          <Col md={6} className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <FontAwesomeIcon icon={faEnvelope} />:
                <p>kaviyarasu2224@gmail.com</p>
              </div>
              <div className="contact-detail">
                <FontAwesomeIcon icon={faPhoneVolume} />:<p>+91 90958-50341</p>
              </div>
              <div className="contact-detail">
                <FontAwesomeIcon icon={faLocationDot} />:<p>TN, India</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="contact-right">
            <Form onSubmit={onSubmit} className=" p-3">
              <Form.Group controlId="formName " className=" py-1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className=" py-1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formPone" className=" py-1">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your Phone No"
                  name="number"
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className=" py-1">
                <Form.Label>Write Your Message Here</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                />
              </Form.Group>
              <Button type="submit" className="contact-submit m-4">
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
