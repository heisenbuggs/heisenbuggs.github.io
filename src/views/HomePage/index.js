import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Animate from "react-smooth";

import homeLogo from "../../assets/main.png";
import Greeting from "../../components/GreetingComponent";
import HomeTwo from "./HomeTwo";
import LineParticle from "../../components/LineParticle";
import Platforms from "./Platforms";
import StarsParticle from "../../components/StarsParticle";
import TypeWriterComponent from "../../components/TypewriterComponent";

const Home = () => {
  return (
    <section className="sect">
      <Animate to="1" from="0" attributeName="opacity">
        <Container fluid className="home-section">
          <StarsParticle />
          <LineParticle />
          <Container className="home-content">
            <Row>
              <Col md={12} lg={7} className="home-header">
                <Greeting />

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name">{" PRASUK"}</strong>
                  <strong className="main-name surname">{" JAIN"}</strong>.
                </h1>

                <Container className="typeContainer">
                  <h6>
                    <TypeWriterComponent />
                  </h6>
                </Container>
                <Platforms />
              </Col>

              <Col md={12} lg={5} className="homeImgContainer">
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
        <HomeTwo />
      </Animate>
    </section>
  );
};

export default Home;
