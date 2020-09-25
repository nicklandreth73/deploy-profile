import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer(props) {
  return (
    <div className={props.isDark ? "dark-footer" : "light-footer"}>
      <a
        className={props.isDark ? "icon-dark" : "icon-light"}
        href="https://github.com/nicklandreth73"
      >
        <GitHubIcon />
        GitHub
      </a>
      <a
        className={props.isDark ? "icon-dark" : "icon-light"}
        href="tel:541-969-1602"
      >
        <PhoneIcon />
        541-969-1602
      </a>
      <a
        className={props.isDark ? "icon-dark" : "icon-light"}
        href="mailto: nicklandreth75@gmail.com"
      >
        <EmailIcon />
        Nicklandreth75@gmail.com
      </a>
      <a
        className={props.isDark ? "icon-dark" : "icon-light"}
        href="https://www.linkedin.com/in/nicholaslandreth/"
      >
        <LinkedInIcon />
        Linkedin
      </a>
    </div>
  );
}

export default Footer;
