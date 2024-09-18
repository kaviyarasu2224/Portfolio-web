import React from "react";
import "./Mywork.css";
import Work_Data from "../../assets/Work_Data";
// import arrow from "../../assets/arrow.jpeg";
import { Container, Row, Col, Button } from "react-bootstrap";

const Mywork = () => {
  return (
    <div id="portfolio" className="work">
      <div className="work-title">
        <h1>Digital Product Showcases</h1>
      </div>
      <Container>
        <Row>
          {Work_Data.map((WorkData, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 work-project"
            >
              <div className="work-image-wrapper">
                <img src={WorkData.w_img} alt="" className="img-fluid" />
                <Button
                  className="work-code"
                  href={WorkData.w_link}
                  target="_blank"
                >
                  Get Code ↗
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Mywork;
