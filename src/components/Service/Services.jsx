import React from "react";
import "./services.css";
import Services_Data from "../../assets/Service_Data.js";
import arrow_icon from "../../assets/arrow.jpeg";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <div id="service" className="service">
      <div className="services-title ">
        <h1>My Services</h1>
      </div>
      <Container>
        <Row>
          {Services_Data.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="services-card">
                <Card.Body>
                  <Card.Title className="service-number">
                    {service.s_no}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 service-name">
                    {service.s_name}
                  </Card.Subtitle>
                  <Card.Text className="service-description">
                    {service.s_desc}
                  </Card.Text>
                  <div className="services_readmore ">
                    <p>Read More</p>
                    <img
                      src={arrow_icon}
                      alt="Arrow icon"
                      className="arrow-icon"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
