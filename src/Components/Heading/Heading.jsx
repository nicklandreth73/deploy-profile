import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";
import "../../App.css";

function Heading(props) {
  const [expanded, setExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);

  function handleClick(isDark) {
    setIsDark(isDark);
    props.handleClick(isDark);
  }
  return (
    <div>
      <Navbar
        expanded={expanded}
        bg={isDark ? "dark" : "info"}
        expand="lg"
        fixed="top"
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <ThemeButton onClick={handleClick} isDark={isDark} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Link
            onClick={() => setExpanded(false)}
            className={isDark ? "menu-text-light" : "menu-text-dark"}
            to="/home"
          >
            Home
          </Link>
          <Link
            onClick={() => setExpanded(false)}
            className={isDark ? "menu-text-light" : "menu-text-dark"}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            onClick={() => setExpanded(false)}
            className={isDark ? "menu-text-light" : "menu-text-dark"}
            to="/about"
          >
            About Me
          </Link>
          <Link
            onClick={() => setExpanded(false)}
            className={isDark ? "menu-text-light" : "menu-text-dark"}
            to="/contact"
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Heading;
