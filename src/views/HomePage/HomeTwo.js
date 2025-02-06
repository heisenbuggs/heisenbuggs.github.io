import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import growwLogoImg from "../../assets/growwLogoImg.png";
import nobrokerLogoImg from "../../assets/nobrokerLogoImg.png";
import phonepeLogoImg from "../../assets/phonepeLogoImg.png";
import linkedinLogoImg from "../../assets/linkedinLogoImg.png";

const HomeTwo = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col xs={12} xl={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and like to explore new things and
              challenges everyday....
              <br />
              <br />
              Fluent in Languages like
              <i>
                <b className="purple">
                  {" "}
                  C++, Java, JavaScript and TypeScript.{" "}
                </b>
              </i>
              <br />
              <br />
              Deep diving into&nbsp;
              <i>
                <b className="purple">
                  System Design, Data Structures and Algorithms
                  {" "}
                </b>
              </i>
              to break down complex problems and sharpen my understanding of scalable architectures.
              <br />
              <br />I also apply my passion for developing products with
              <i>
                <b className="purple"> Modern Technologies</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                  {" "}
                  React, Spring Boot
                </b>
                &nbsp; and
                <b className="purple">
                  {" "}
                  ExpressJS 
                  {" "}
                </b>
              </i>
                turning ideas into awesome products.
            </p>
          </Col>
          <Col xs={12} xl={4} className="company">
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={10}
              tiltMaxAngleY={30}
              perspective={800}
              transitionSpeed={1500}
              scale={1.1}
              gyroscope={true}
            >
              <img
                src={linkedinLogoImg}
                className="img-fluid face"
                alt="LinkedIn"
                title="LinkedIn"
              />
              <img
                src={phonepeLogoImg}
                className="img-fluid face"
                alt="Phonepe"
                title="PhonePe"
              />
              <img
                src={growwLogoImg}
                className="img-fluid face"
                alt="Groww"
                title="Groww"
              />
              <img
                src={nobrokerLogoImg}
                className="img-fluid face"
                alt="NoBroker"
                title="NoBroker"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thereal.prasuk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/prasuksjain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fa-brands fa-x-twitter fa-lg"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prasukjain04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prasuksjain/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HomeTwo;
