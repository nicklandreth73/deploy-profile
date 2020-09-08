import React from "react";
import AboutArticle from "./AboutArticle";

function About(props) {
  return (
    <div className={props.isDark ? "darkMode" : "lightMode"}>
      <AboutArticle isDark={props.isDark} />
    </div>
  );
}

export default About;
