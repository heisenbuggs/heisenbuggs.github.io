import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderComponent.css";
import "../HamburgerComponent/HamBurgerComponent.css";

import React, { useState } from "react";

import { NavbarBrand, NavItem, NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgUserlane } from "react-icons/cg";
import { FaCodeBranch } from "react-icons/fa";
import { IoDocumentText, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import pdf from "../../assets/Resume_PrasukJain.pdf";

import audio from "../../assets/tick.mp3";
import Hamburger from "../HamburgerComponent";

const HeaderComponent = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const start = () => {
    new Audio(audio).play();
  };

  const scrollHandler = () => {
    if (window.scrollY >= 70) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <NavbarBrand href="/">
          <h3 className="brand">
            <b>{"< heisenbuggs />"}</b>
          </h3>
        </NavbarBrand>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
            start();
          }}
        >
          <Hamburger expand={expand} onClick={start} />
        </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <NavItem>
              <NavLink as={Link} to="/" onClick={() => updateExpanded(false)}>
                <IoHome className="headerIcon" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <CgUserlane className="headerIcon" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <FaCodeBranch className="headerIcon" /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <IoDocumentText className="headerIcon" /> Resume
              </NavLink>
            </NavItem>

            <NavItem className="fork-btn">
              <Button
                href="https://github.com/heisenbuggs/DevFolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <i className="far fa-star"></i>
              </Button>
            </NavItem>
            <NavItem className="fork-btn">
              <Button target="_blank" href={pdf} className="fork-btn-inner">
                <i className="fa fa-download"></i>
              </Button>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;