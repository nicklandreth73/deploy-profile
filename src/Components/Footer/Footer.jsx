import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer(props) {
  return (
    <div className={props.isDark ? "dark-footer" : "light-footer"}>
      <a href="https://github.com/nicklandreth73">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default Footer;
