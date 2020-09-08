import React from "react";

function AboutArticle(props) {
  return (
    <h1 className={props.isDark ? "lightText" : "darkText"}>
      Hello, my name is Nick Landreth, and I am a Front End/Full Stack web
      developer.
      <br />
      <br /> I am currently focusing most of my time on Javascript and more
      specifically React. However I have worked in many languages and
      frameworks.
      <br />
      <br />I take pride in putting in the extra effort that can make the
      difference between success, and excellence.
    </h1>
  );
}

export default AboutArticle;
