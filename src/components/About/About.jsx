import React from "react";
import "./About.css";
import about_img from "../../assets/kavi-overly.png";

const About = () => {
  return (
    <div id="about" className="about container-fluid ">
      <div className="about-title  ">
        <h1>About Me</h1>
      </div>
      <div className="row align-items-center justify-content-center  m-4">
        <div className="col-lg-5 col-md-6 mb-4">
          <img src={about_img} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-para mb-4">
            <p>
              I am Kaviyarasu, a passionate web developer with a strong
              foundation in the MERN stack and MySQL. I have completed a B.Sc.
              in Computer Science from Periyar University, and I'm certified in
              full-stack web development. My journey into coding has equipped me
              with skills in creating responsive and dynamic web applications.
            </p>
            <p>
              With hands-on experience in building projects like a student
              management system and a personal portfolio website, I am
              proficient in technologies like React, Node.js, Express, and
              MySQL. I am constantly seeking opportunities to improve my
              problem-solving skills, currently practicing on platforms like
              CodeChef.
            </p>
          </div>

          <div className="about-skills ">
            <div className="about-skill d-flex align-items-center mb-3">
              <p>HTML & CSS</p>
              <hr className=" skill-bar" style={{ width: "75%" }} />
            </div>
            <div className="about-skill d-flex align-items-center mb-3">
              <p>JAVASCRIPT</p>
              <hr className="flex-grow- skill-bar" style={{ width: "70%" }} />
            </div>
            <div className="about-skill d-flex align-items-center mb-3">
              <p>REACT.JS</p>
              <hr className="flex-grow- skill-bar" style={{ width: "80%" }} />
            </div>
            <div className="about-skill d-flex align-items-center mb-3">
              <p>NODE.JS</p>
              <hr className="flex-grow- skill-bar" style={{ width: "55%" }} />
            </div>
            <div className="about-skill d-flex align-items-center mb-3">
              <p>MYSQL</p>
              <hr className="flex-grow- skill-bar" style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row about-achievements justify-content-center mr-5 px-5 ">
        <div className="col-md-4 col-4 text-center about-achievement">
          <h1>5+</h1>
          <p>Months of Experience</p>
        </div>
        <div className="col-md-4 col-4 text-center about-achievement">
          <h1>15+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="col-md-4 col-4 text-center about-achievement">
          <h1>5+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
