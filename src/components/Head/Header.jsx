import React from "react";
import "./Header.css";
import profile_img from "../../assets/kavi.png";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div id="home" className="header container-fluid text-center">
      <div className="row align-items-center ">
        <div className="header-titles ">
          <h2 className="header-title">Welcome To My website</h2>
        </div>
        <div className="col-md-6">
          <img src={profile_img} alt="" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-6 ">
          <h1>
            <span>Hi! I'm Kaviyarasu</span> <br /> Frontend Developer
          </h1>
          <p>
            I love to create beautiful and performant products with delightful
            user experiences..
          </p>
          <div className="header-action d-flex justify-content-center gap-3 mt-4">
            <Button
              className="btn btn-primary header-connect"
              href="#contact"
              onClick={() => setMenu("contact")}
            >
              Connect with Me
            </Button>
            <Button
              className="btn btn-secondary header-resume"
              target="_blank"
              href="https://drive.google.com/file/d/1Ti2n8QLwvQPDYYulBo3uMD_Sa9zVNNOo/view?usp=sharing"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
