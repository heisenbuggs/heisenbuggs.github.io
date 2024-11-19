import "./Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaDownload } from "react-icons/fa";
import Animate from "react-smooth";

import pdf from "../../assets/Resume_PrasukJain.pdf";
import {
  ACHIEVEMENTS,
  WORK_EXPERIENCE,
} from "../../utils/constants/resumeContent";
import Resumecontent from "./ResumeContent";
import LineParticle from "../../components/LineParticle";
import StarsParticle from "../../components/StarsParticle";

const Resume = () => {
  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Container fluid className="resume-section">
        <StarsParticle />
        <LineParticle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="download-btn"
            >
              <FaDownload />
              &nbsp; Download Resume
            </Button>
          </Row>
          <Row className="resume">
            <Col md={12} className="resume-left">
              <h3 className="resume-heading">Experience</h3>
              {WORK_EXPERIENCE.map((item) => (
                <Resumecontent
                  key={item.company}
                  title={item.title}
                  institute={item.company}
                  date={item.date}
                  content={item.content}
                />
              ))}
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-heading">Education</h3>
              <Resumecontent
                title="B.Tech. Electronics & Communication"
                date="Aug 2018 - Jun 2022"
                institute="Shri G.S. Institute of Technology & Science, Indore"
              />
              <Resumecontent
                title="High School"
                date="May 2018"
                institute="New Shanti Niketan Higher Sec. School, Vidisha"
              />
              <Resumecontent
                title="Middle School "
                date="May 2016"
                institute="St. Mary's Convent Sr. Sec. School, Bhopal"
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-heading">Achievements</h3>
              <Resumecontent title="" content={ACHIEVEMENTS} />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="download-btn"
            >
              <FaDownload />
              &nbsp; Download Resume
            </Button>
          </Row>
        </Container>
      </Container>
    </Animate>
  );
};

export default Resume;
